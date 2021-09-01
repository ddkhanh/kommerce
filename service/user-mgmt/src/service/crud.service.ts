import { Document, FilterQuery, Model, ObjectId } from 'mongoose';

export abstract class CrudService<T extends Document> {
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
        let update = data;
        let id = data.id;
        //Make sure we don't include indentifier in the update that mongose exception
        delete update.id;
        delete update._id;
        let saved = await this.model.findByIdAndUpdate(id, update as any, {new: true}).exec()
        return saved;
    }
    public async delete(key: ObjectId | string): Promise<T> {
        return this.model.remove({ id: key });
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