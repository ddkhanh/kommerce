import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { Product } from '../schema/product.schema';
import { ProductRequest, ProductResponse } from '../../../protobuf/tsgen/product';

@Injectable()
export class ProductTransformer  implements Transformer<ProductRequest, ProductResponse, Product>{
    
    from(req: ProductRequest): Product {
        return <Product>{
            name: req.name,
            description: req.description,
            qualityStock: req.qualityStock
        }
    }
    to(doc: Product): ProductResponse {
        return <ProductResponse> {
            name: doc.name,
            id: doc.id,
            description: doc.description,
            qualityStock: doc.qualityStock
        }
    }
   
   
}