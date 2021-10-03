import { Transformer } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { ProductVariantDto } from '../../../grpc/product';
import { ProductVariant } from '../schema/product-variant.schema';

@Injectable()
export class ProductVariantTransformer  implements Transformer<ProductVariantDto, ProductVariantDto, ProductVariant>{
    
    from(req: ProductVariantDto): ProductVariant {
        let variant = <ProductVariant>{
            id: req.id,
            name: req.name,
            description: req.description,
            enabled: req.enabled,
            price: req.price,
            sku: req.sku,
            stockAllocated: req.stockAllocated,
            stockOnHand: req.stockOnHand,
            outOfStockThreshold: req.outOfStockThreshold            
        };
        return variant;
    }
    to(doc: ProductVariant): ProductVariantDto {
        return <ProductVariantDto> {
            id: doc.id,
            name: doc.name,
            description: doc.description,
            enabled: doc.enabled,
            price: doc.price,
            sku: doc.sku,
            stockAllocated: doc.stockAllocated,
            stockOnHand: doc.stockOnHand,
            outOfStockThreshold: doc.outOfStockThreshold   
        }
    }
}