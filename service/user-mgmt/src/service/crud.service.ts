import { AnyAaaaRecord } from 'dns';
import { Document, FilterQuery, Model, ObjectId } from 'mongoose';

export abstract class CrudService<T extends Document> {
    protected model: Model<T>;
    
    protected constructor(model: Model<T>) {
        this.model = model;
    }

    public async createOrUpdate(data: T): Promise<T> {
        let filter = {
            [this.getUniqueKey()]: this.getProperty(data, this.getUniqueKey())
        } as FilterQuery<T>

        let created = new this.model(data).toObject();
        delete created._id;
        delete created.id;
        let inDb = await this.model.findOneAndUpdate(filter, created as any, 
            {new: true, upsert: true, useFindAndModify: false}
            ).exec();     
        // if(inDb) {
        //     created._id = inDb.id
        //     let updated = await created.updateOne({}).exec();
        //     return updated;
        // }
        return inDb;
    }
    public async delete(key: ObjectId | string): Promise<T> {
        return this.model.remove({id: key});
    }

    public async findOne(key: ObjectId | string): Promise<T | null> {
        return await this.model.findById(key).exec();
    }

    public async findAll(): Promise<T[]> {
        return await this.model.find().exec();
    }

    private getProperty<K extends keyof T>(o: T, propertyName: K): T[K] {
        return o[propertyName]; // o[propertyName] is of type T[K]
    }
    
    /**
     * Return a unique key where this the document could be found in the DB
     */
    protected abstract getUniqueKey<K extends keyof T>(): K;
}