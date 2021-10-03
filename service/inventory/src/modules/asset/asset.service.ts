import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CrudService } from "../../service/crud.service";
import { Asset } from "./schema/asset.schema";

@Injectable()
export class AssetService extends CrudService<Asset> {
    constructor(@InjectModel(Asset.name) private readonly cModel: Model<Asset>) {
        super(cModel);
    }
}