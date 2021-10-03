import { NotFoundException, UnExpectedException } from "@kommerce/common";
import { Body, Controller } from "@nestjs/common";
import { JoiValidationPipe } from "../../pipe/joi.pipe";
import { AssetDto, AssetListDto, AssetServiceController, AssetServiceControllerMethods, CreateAssetRequest, UpdateAssetRequest } from "../../grpc/asset";
import { ObjectId, SearchRequest } from "../../grpc/common";
import { MongoIdValidator, SearchRequestValidator } from "../../validator/common.validator";
import { AssetService } from "./asset.service";
import { AssetTransformer } from "./transformer/asset.transformer";
import { CreateAssetValidator, UpdateAssetValidator } from "./validator/asset.validator";

@Controller()
@AssetServiceControllerMethods()
export class AssetController implements AssetServiceController {
    constructor(private readonly assetSvc: AssetService,
        private readonly assetTrans: AssetTransformer
    ) { }

    async createAsset(@Body(new JoiValidationPipe(CreateAssetValidator)) request: CreateAssetRequest): Promise<AssetDto> {
        let asset = this.assetTrans.from(request);
        let saved = await this.assetSvc.create(asset);
        return this.assetTrans.to(saved);
    }
    async updateAsset(@Body(new JoiValidationPipe(UpdateAssetValidator)) request: UpdateAssetRequest): Promise<AssetDto> {
        let asset = this.assetTrans.from(request);
        let saved = await this.assetSvc.update(asset);
        if(saved) {
            return this.assetTrans.to(saved);
        }
        throw UnExpectedException(`Something went wrong, unabled to save ${request.conditions}`)
    }
    async deleteAsset(@Body(new JoiValidationPipe(MongoIdValidator)) request: ObjectId): Promise<AssetDto> {
        let deleted = await this.assetSvc.delete(request.id);
        if(deleted) {
            return this.assetTrans.to(deleted);
        }
        throw NotFoundException(`Asset ${request.id} is not found`)

    }
    async search(@Body(new JoiValidationPipe(SearchRequestValidator)) request: SearchRequest): Promise<AssetListDto> {
        let assets = await this.assetSvc.findAll()
        return <AssetListDto> {
            assets: assets.map(e => this.assetTrans.to(e))
        }
    }

}