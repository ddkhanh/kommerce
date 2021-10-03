import { FilterQuery, Model, ObjectId } from 'mongoose';
import { KommerceSchema } from '../schema/common.schema';

export abstract class CrudService<T extends KommerceSchema> {
    protected model: Model<T>;

    protected constructor(model: Model<T>) {
        this.model = model;
    }

    public async create(data: T): Promise<T> {
        let saveTo = new this.model(data);
        let inDb = await this.model.create(saveTo);
        return inDb;
    }
    public async update(data: T): Promise<T | null> {
        let doc = data;
        //Make sure we alway update the latest data, otherwise it should end up the error of null result
        let filters = <FilterQuery<T>>{_id: doc.id, version: doc.version};
        doc.version++; 
        const updateOption = {
            new: true,
        };
        let saved  = await this.model.findOneAndUpdate(filters, [{$set: doc}],  updateOption).exec();
        // let saved = await this.model.findByIdAndUpdate(id, update as any, {new: true}).exec()
        return saved;
    }
    public async delete(key: ObjectId | string): Promise<T | null> {
        return this.model.findByIdAndDelete(key, {}).exec();
    }

    public async findById(key: ObjectId | string): Promise<T | null> {
        return await this.model.findById(key).exec();
    }

    public async findBy(filters: FilterQuery<T>): Promise<T[]> {
        let result = await this.model.find(filters).exec()
        return result;
    }

    public async findAll(): Promise<T[]> {
        return await this.model.find().exec();
    }
}