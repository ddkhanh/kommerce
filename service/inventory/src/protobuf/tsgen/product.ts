/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Asset } from './asset';
import { Category } from './category';

export const protobufPackage = 'inventory';

/**
 * After chaing this file, your have trigger code generation for this by issuing
 * yarn gen
 */

export enum CriteriaMethod {
  /** eq - equals */
  eq = 0,
  /** gt - greater than */
  gt = 1,
  /** lt - less than */
  lt = 2,
  /** ne - not equals */
  ne = 3,
  /** in - in */
  in = 4,
  /** sw - starts with */
  sw = 5,
  /** ew - ends with */
  ew = 6,
  /** ct - contains */
  ct = 7,
  /** regex - reqgular expression */
  regex = 8,
  UNRECOGNIZED = -1,
}

export interface ProductRequest {
  name: string;
  description: string;
  qualityStock: number;
  variants: ProductVariant[];
  assets: Asset[];
  categories: Category[];
}

export interface ProductListResponse {
  products: ProductResponse[];
  total: number;
}

export interface ProductVariant {}

export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  qualityStock: number;
  variants: ProductVariant[];
  assets: Asset[];
  categories: Category[];
}

export interface ProductVariantRequest {}

export interface ProductVariantResponse {}

export interface ProductVariantList {
  variants: ProductVariantRequest[];
}

export interface ObjectId {
  id: string;
}

export interface SearchCriteria {
  name: string;
  value: string;
  md: CriteriaMethod;
}

export interface SearchRequest {
  criterias: SearchCriteria[];
  or: boolean;
  page: number;
  limit: number;
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

export interface ProductServiceClient {
  createProduct(request: ProductRequest): Observable<ProductResponse>;

  updateProduct(request: ProductRequest): Observable<ProductResponse>;

  deleteProduct(request: ObjectId): Observable<ProductResponse>;

  search(request: SearchRequest): Observable<ProductListResponse>;

  createProductVariants(
    request: ProductVariantList,
  ): Observable<ProductVariantResponse>;

  updateProductVariants(
    request: ProductVariantList,
  ): Observable<ProductVariantResponse>;

  deleteProductVariant(request: ObjectId): Observable<ProductVariantResponse>;
}

export interface ProductServiceController {
  createProduct(
    request: ProductRequest,
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse;

  updateProduct(
    request: ProductRequest,
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse;

  deleteProduct(
    request: ObjectId,
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse;

  search(
    request: SearchRequest,
  ):
    | Promise<ProductListResponse>
    | Observable<ProductListResponse>
    | ProductListResponse;

  createProductVariants(
    request: ProductVariantList,
  ):
    | Promise<ProductVariantResponse>
    | Observable<ProductVariantResponse>
    | ProductVariantResponse;

  updateProductVariants(
    request: ProductVariantList,
  ):
    | Promise<ProductVariantResponse>
    | Observable<ProductVariantResponse>
    | ProductVariantResponse;

  deleteProductVariant(
    request: ObjectId,
  ):
    | Promise<ProductVariantResponse>
    | Observable<ProductVariantResponse>
    | ProductVariantResponse;
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
