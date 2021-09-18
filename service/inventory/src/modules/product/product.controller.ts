import { NotFoundException, UnExpectedException } from '@kommerce/common';
import { Body, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JoiValidationPipe } from '../../pipe/joi.pipe';
import { ObjectId, SearchRequest } from '../../protobuf/tsgen/common';
import { ProductDto, ProductListDto, ProductRequest, ProductServiceController, ProductServiceControllerMethods, ProductVariantDto, ProductVariantList } from '../../protobuf/tsgen/product';
import { ProductService } from './product.service';
import { ProductTransformer } from './transformer/product.transformer';
import { CreateProductValidator, MongoIdValidator, SearchRequestValidator, UpdateProductValidator } from './validator/product.validator';

@Controller()
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
    constructor(
        private readonly productSvc: ProductService,
        private readonly productTrans: ProductTransformer
    ) { }

    async search(request: SearchRequest): Promise<ProductListDto> {
        let valid = SearchRequestValidator.validate(request);
        if(valid.error) {

        }
        let products = await this.productSvc.findAll();

        return <ProductListDto>{
            total: products.length,
            products: products.map(p => this.productTrans.to(p))
        }
    }

    async createProduct(@Body(new JoiValidationPipe(CreateProductValidator)) request: ProductRequest): Promise<ProductDto> {
        let product = this.productTrans.from(request);
        let saved = await this.productSvc.create(product);
        return this.productTrans.to(saved);
    }

    async updateProduct(@Body(new JoiValidationPipe(UpdateProductValidator)) request: ProductDto): Promise<ProductDto> {
        let product = this.productTrans.from(request);
        let updated = await this.productSvc.update(product);
        if(!updated) {
            throw UnExpectedException(`Something went wrong, unable to update product ${product.id}`) 
        }
        return this.productTrans.to(updated);
    }
    
    async deleteProduct(@Body(new JoiValidationPipe(MongoIdValidator)) request: ObjectId): Promise<ProductDto> {
        let deleted = await this.productSvc.delete(request.id);
        if (deleted) {
            return this.productTrans.to(deleted);
        }
        throw NotFoundException(`Product ${request.id} is not found`)
    }
    createProductVariants(request: ProductVariantList): ProductVariantDto | Promise<ProductVariantDto> | Observable<ProductVariantDto> {
        throw new Error('Method not implemented.');
    }
    updateProductVariants(request: ProductVariantList): ProductVariantDto | Promise<ProductVariantDto> | Observable<ProductVariantDto> {
        throw new Error('Method not implemented.');
    }
    deleteProductVariant(request: ObjectId): ProductVariantDto | Promise<ProductVariantDto> | Observable<ProductVariantDto> {
        throw new Error('Method not implemented.');
    }

}
