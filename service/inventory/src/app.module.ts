import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbOptions } from './config';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(dbOptions.uri, dbOptions.options),
    CategoryModule,
    ProductModule
  ],
})
export class AppModule {}
