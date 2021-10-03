import { NotFoundException, UnExpectedException } from '@kommerce/common';
import { Body, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JoiValidationPipe } from '../../pipe/joi.pipe';
import { ObjectId, SearchRequest } from '../../grpc/common';
import { CreateProductRequest, ProductDto, ProductListDto, ProductServiceController, ProductServiceControllerMethods, ProductVariantDto, ProductVariantListDto, ProductVariantsRequest, UpdateProductRequest } from '../../grpc/product';
import { MongoIdValidator, SearchRequestValidator } from '../../validator/common.validator';
import { ProductService } from './product.service';
import { ProductVariantTransformer } from './transformer/product-variant.transformer';
import { ProductTransformer } from './transformer/product.transformer';
import { CreateProductValidator, UpdateProductValidator } from './validator/product.validator';

@Controller()
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
    constructor(
        private readonly productSvc: ProductService,
        private readonly productTrans: ProductTransformer,
        private readonly variantTrans: ProductVariantTransformer,
    ) { }

    async search(@Body(new JoiValidationPipe(SearchRequestValidator)) request: SearchRequest): Promise<ProductListDto> {
        let products = await this.productSvc.findAll();

        return <ProductListDto>{
            total: products.length,
            products: products.map(p => this.productTrans.to(p))
        }
    }

    async createProduct(@Body(new JoiValidationPipe(CreateProductValidator)) request: CreateProductRequest): Promise<ProductDto> {
        let product = this.productTrans.from(request);
        let saved = await this.productSvc.create(product);
        return this.productTrans.to(saved);
    }

    async updateProduct(@Body(new JoiValidationPipe(UpdateProductValidator)) request: UpdateProductRequest): Promise<ProductDto> {
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
    async createProductVariants(request: ProductVariantsRequest): Promise<ProductVariantListDto>{
        let product:any = null;
        if(request.conditions) {
            product = await this.productSvc.findBy(request.conditions);
        }
        if(!product) {
            throw NotFoundException(`Product ${request.conditions?.id} not found`)
        }
        request.variants.forEach(v => product?.variants.push(this.variantTrans.from(v)));
        let saved = await this.productSvc.update(product);
        if(saved?.variants) {
            return <ProductVariantListDto> {
                variants: saved.variants.map(v => this.variantTrans.to(v))
            }
        }
        return <ProductVariantListDto>{};

    }
    deleteProductVariant(request: ObjectId): ProductVariantDto | Promise<ProductVariantDto> | Observable<ProductVariantDto> {
        throw new Error('Method not implemented.');
    }

    updateProductVariants(request: ProductVariantsRequest): ProductVariantListDto | Promise<ProductVariantListDto> | Observable<ProductVariantListDto> {
        throw new Error('Method not implemented.');
    }

}
