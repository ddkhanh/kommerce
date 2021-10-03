import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { ProductVariant, ProductVariantSchema } from './schema/product-variant.schema';
import { ProductController } from './product.controller';
import { ProductTransformer } from './transformer/product.transformer';
import { ProductVariantTransformer } from './transformer/product-variant.transformer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema},
      {name: ProductVariant.name, schema: ProductVariantSchema},
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductTransformer, ProductVariantTransformer],
  exports: [ProductService]
})
export class ProductModule {}
