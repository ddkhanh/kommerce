import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { Product } from '../schema/product.schema';
import { ProductDto, CreateProductRequest, UpdateProductRequest } from '../../../grpc/product';
import { Category } from '../../category/schema/category.schema';
import { Asset } from '../../asset/schema/asset.schema';
import { ProductVariant } from '../schema/product-variant.schema';
import { ProductVariantTransformer } from './product-variant.transformer';

type ProductRequest = CreateProductRequest | UpdateProductRequest;
@Injectable()
export class ProductTransformer implements Transformer<ProductRequest, ProductDto, Product>{
    
    constructor(private readonly variantTrans: ProductVariantTransformer){}

    from(req: ProductRequest): Product {
        let product = new Product();
        if ("conditions" in req) {
            if (req.data && req.conditions) {
                product = this.from(req.data);
                product.id = req.conditions.id;
                product.version = req.conditions.version;
            }
        } else {
            product.name = req.name;
            product.description = req.description;
            product.categories = req.categories?.map(id => <Category>{id: id});
            product.assets = req.categories?.map(id => <Asset>{id: id});
            product.variants = req.variants.map(v => this.variantTrans.from(v));
        }
        return product;
    }
    to(doc: Product): ProductDto {
        return <ProductDto>{
            name: doc.name,
            version: doc.version,
            id: doc.id,
            description: doc.description,
            variants: doc.variants.map(v => this.variantTrans.to(v))
        }
    }


}