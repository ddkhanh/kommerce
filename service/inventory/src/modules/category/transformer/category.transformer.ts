import { Transformer } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { CategoryDto, CategoryRequest } from '../../../protobuf/tsgen/category';
import { Category } from '../schema/category.schema';

@Injectable()
export class CategoryTransformer implements Transformer<CategoryRequest | CategoryDto, CategoryDto, Category> {
    
    from(req: CategoryRequest | CategoryDto): Category {
        let category = <Category> {
            name: req.name,
            description: req.description
        }
        let dto = req as CategoryDto;
        if(dto.id) {
            category.id = dto.id;
        }
        return category;
    }
    to(doc: Category): CategoryDto {
       return <CategoryDto> {
           id: doc.id,
           name: doc.name,
           description: doc.description,
           parent: doc.parent?.id
       }
    }

}