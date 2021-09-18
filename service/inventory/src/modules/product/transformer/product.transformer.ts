import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { Product } from '../schema/product.schema';
import { ProductRequest, ProductDto } from '../../../protobuf/tsgen/product';

@Injectable()
export class ProductTransformer  implements Transformer<ProductRequest | ProductDto, ProductDto, Product>{
    
    from(req: ProductRequest | ProductDto): Product {
       let product = <Product>{            
            name: req.name,
            description: req.description,
            qualityStock: req.qualityStock
        }
        let dto = req as ProductDto;
        if(dto.id) {
            product.id = dto.id;
        }
        return product;
    }
    to(doc: Product): ProductDto {
        return <ProductDto> {
            name: doc.name,
            id: doc.id,
            description: doc.description,
            qualityStock: doc.qualityStock
        }
    }
   
   
}