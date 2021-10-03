import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbOptions } from './config';
import { AssetModule } from './modules/asset/asset.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(dbOptions.uri, dbOptions.options),
    CategoryModule,
    AssetModule,
    ProductModule
  ],
})
export class AppModule {}
