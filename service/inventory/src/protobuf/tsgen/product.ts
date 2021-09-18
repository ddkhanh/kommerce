/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Asset } from './asset';
import { CategoryDto } from './category';
import { ObjectId, SearchRequest } from './common';

export const protobufPackage = 'inventory';

/**
 * After chaing this file, your have trigger code generation for this by issuing
 * yarn gen
 */

export interface ProductRequest {
  name: string;
  description: string;
  qualityStock: number;
  variants: string[];
  assets: string[];
  categories: string[];
}

export interface ProductListDto {
  products: ProductDto[];
  total: number;
}

export interface ProductVariant {}

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  qualityStock: number;
  variants: ProductVariant[];
  assets: Asset[];
  categories: CategoryDto[];
}

export interface ProductVariantRequest {}

export interface ProductVariantDto {}

export interface ProductVariantList {
  variants: ProductVariantRequest[];
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

export interface ProductServiceClient {
  createProduct(request: ProductRequest): Observable<ProductDto>;

  updateProduct(request: ProductDto): Observable<ProductDto>;

  deleteProduct(request: ObjectId): Observable<ProductDto>;

  search(request: SearchRequest): Observable<ProductListDto>;

  createProductVariants(
    request: ProductVariantList,
  ): Observable<ProductVariantDto>;

  updateProductVariants(
    request: ProductVariantList,
  ): Observable<ProductVariantDto>;

  deleteProductVariant(request: ObjectId): Observable<ProductVariantDto>;
}

export interface ProductServiceController {
  createProduct(
    request: ProductRequest,
  ): Promise<ProductDto> | Observable<ProductDto> | ProductDto;

  updateProduct(
    request: ProductDto,
  ): Promise<ProductDto> | Observable<ProductDto> | ProductDto;

  deleteProduct(
    request: ObjectId,
  ): Promise<ProductDto> | Observable<ProductDto> | ProductDto;

  search(
    request: SearchRequest,
  ): Promise<ProductListDto> | Observable<ProductListDto> | ProductListDto;

  createProductVariants(
    request: ProductVariantList,
  ):
    | Promise<ProductVariantDto>
    | Observable<ProductVariantDto>
    | ProductVariantDto;

  updateProductVariants(
    request: ProductVariantList,
  ):
    | Promise<ProductVariantDto>
    | Observable<ProductVariantDto>
    | ProductVariantDto;

  deleteProductVariant(
    request: ObjectId,
  ):
    | Promise<ProductVariantDto>
    | Observable<ProductVariantDto>
    | ProductVariantDto;
}

export function ProductServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createProduct',
      'updateProduct',
      'deleteProduct',
      'search',
      'createProductVariants',
      'updateProductVariants',
      'deleteProductVariant',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ProductService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('ProductService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const PRODUCT_SERVICE_NAME = 'ProductService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
