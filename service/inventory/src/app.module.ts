import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbOptions } from './config';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(dbOptions.uri, dbOptions.options),
    ProductModule
  ],
})
export class AppModule {}
