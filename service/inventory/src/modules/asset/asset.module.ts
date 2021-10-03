import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AssetController } from "./asset.controller";
import { AssetService } from "./asset.service";
import { Asset, AssetSchema } from "./schema/asset.schema";
import { AssetTransformer } from "./transformer/asset.transformer";

@Module({
    imports: [
      MongooseModule.forFeature([
        {name: Asset.name, schema: AssetSchema},
      ])
    ],
    controllers: [AssetController],
    providers: [AssetService, AssetTransformer],
    exports: [AssetService, AssetTransformer]
  })
  export class AssetModule {}