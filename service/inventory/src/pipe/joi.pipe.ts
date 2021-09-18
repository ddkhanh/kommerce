import { ValidationException } from '@kommerce/common';
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { ObjectSchema } from 'joi';

/**
 * Using Joi schema to validate request input <br/>
 * Preference [NestJs Pipe](https://docs.nestjs.com/pipes)
 * @constructor Joi's ObjectSchema 
 * @example async createProduct(@Body(new JoiValidationPipe(CreateProductValidator)) request: ProductRequest): Promise<ProductDto> {
        let product = this.productTrans.from(request);
        let saved = await this.productSvc.create(product);
        return this.productTrans.to(saved);
    }
 */
@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }

    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value, {abortEarly: false});
        if (error) {
            throw ValidationException(error.message)
        }
        return value;
    }
}