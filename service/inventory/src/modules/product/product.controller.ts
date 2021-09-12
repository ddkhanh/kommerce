import { Controller } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { ObjectId, ProductListResponse, ProductRequest, ProductResponse, ProductServiceController, ProductServiceControllerMethods, ProductVariantList, ProductVariantResponse, SearchRequest } from '../../protobuf/tsgen/product';
import { ProductService } from './product.service';
import { NotFoundException } from '@kommerce/common';
import { ProductTransformer } from './transformer/product.transformer';

@Controller()
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
    constructor(
        private readonly productSvc: ProductService,
        private readonly productTrans: ProductTransformer
    ) { }

    async search(request: SearchRequest): Promise<ProductListResponse> {
        let products = await this.productSvc.findAll();

        return <ProductListResponse>{
            total: products.length,
            products: products.map(p => this.productTrans.to(p))
        }
    }

    async createProduct(request: ProductRequest): Promise<ProductResponse> {
        let product = this.productTrans.from(request);
        let saved = await this.productSvc.create(product);
        return this.productTrans.to(saved);
    }

    async updateProduct(request: ProductRequest): Promise<ProductResponse> {
        throw new Error('Method not implemented.');
    }
    
    async deleteProduct(request: ObjectId): Promise<ProductResponse> {
        let deleted = await this.productSvc.delete(request.id);
        if (deleted) {
            return this.productTrans.to(deleted);
        }
        throw NotFoundException(`Product ${request.id} is not found`)
    }
    createProductVariants(request: ProductVariantList): ProductVariantResponse | Promise<ProductVariantResponse> | Observable<ProductVariantResponse> {
        throw new Error('Method not implemented.');
    }
    updateProductVariants(request: ProductVariantList): ProductVariantResponse | Promise<ProductVariantResponse> | Observable<ProductVariantResponse> {
        throw new Error('Method not implemented.');
    }
    deleteProductVariant(request: ObjectId): ProductVariantResponse | Promise<ProductVariantResponse> | Observable<ProductVariantResponse> {
        throw new Error('Method not implemented.');
    }

}
