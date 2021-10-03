/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { UpdateConditions, ObjectId, SearchRequest } from './common';
import { AssetDto } from './asset';
import { CategoryDto } from './category';

export const protobufPackage = 'inventory';

/**
 * After chaing this file, your have trigger code generation for this by issuing
 * yarn gen
 */

export interface CreateProductRequest {
  name: string;
  description: string;
  qualityStock: number;
  variants: ProductVariantDto[];
  assets: string[];
  categories: string[];
}

export interface UpdateProductRequest {
  conditions: UpdateConditions | undefined;
  data: CreateProductRequest | undefined;
}

export interface ProductListDto {
  products: ProductDto[];
  total: number;
}

export interface ProductVariantDto {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  stockOnHand: number;
  stockAllocated: number;
  outOfStockThreshold: number;
  options: ProductOptionDto[];
  sku: string;
  price: number;
  assets: AssetDto[];
  version: number;
}

export interface ProductVariantsRequest {
  conditions: UpdateConditions | undefined;
  variants: ProductVariantDto[];
}

export interface ProductVariantListDto {
  variants: ProductVariantDto[];
}

export interface ProductOptionDto {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  variants: ProductVariantDto[];
  assets: AssetDto[];
  categories: CategoryDto[];
  version: number;
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

export interface ProductServiceClient {
  createProduct(request: CreateProductRequest): Observable<ProductDto>;

  updateProduct(request: UpdateProductRequest): Observable<ProductDto>;

  deleteProduct(request: ObjectId): Observable<ProductDto>;

  search(request: SearchRequest): Observable<ProductListDto>;

  createProductVariants(
    request: ProductVariantsRequest,
  ): Observable<ProductVariantListDto>;

  updateProductVariants(
    request: ProductVariantsRequest,
  ): Observable<ProductVariantListDto>;

  deleteProductVariant(request: ObjectId): Observable<ProductVariantDto>;
}

export interface ProductServiceController {
  createProduct(
    request: CreateProductRequest,
  ): Promise<ProductDto> | Observable<ProductDto> | ProductDto;

  updateProduct(
    request: UpdateProductRequest,
  ): Promise<ProductDto> | Observable<ProductDto> | ProductDto;

  deleteProduct(
    request: ObjectId,
  ): Promise<ProductDto> | Observable<ProductDto> | ProductDto;

  search(
    request: SearchRequest,
  ): Promise<ProductListDto> | Observable<ProductListDto> | ProductListDto;

  createProductVariants(
    request: ProductVariantsRequest,
  ):
    | Promise<ProductVariantListDto>
    | Observable<ProductVariantListDto>
    | ProductVariantListDto;

  updateProductVariants(
    request: ProductVariantsRequest,
  ):
    | Promise<ProductVariantListDto>
    | Observable<ProductVariantListDto>
    | ProductVariantListDto;

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
