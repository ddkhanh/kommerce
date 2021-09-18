import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CrudService } from "../../service/crud.service";
import { Category } from "./schema/category.schema";
import { Model } from 'mongoose';

@Injectable()
export class CategoryService extends CrudService<Category> {
    constructor(@InjectModel(Category.name) private readonly cModel: Model<Category>) {
        super(cModel);
    }
}