/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { ObjectId, SearchRequest } from './common';

export const protobufPackage = 'inventory';

export interface CategoryRequest {
  name: string;
  description: string;
  parent: string;
}

export interface CategoryDto {
  id: string;
  name: string;
  description: string;
  parent: string;
}

export interface CategoryListDto {
  categories: CategoryDto[];
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

export interface CategoryServiceClient {
  createCategory(request: CategoryRequest): Observable<CategoryDto>;

  updateCategory(request: CategoryDto): Observable<CategoryDto>;

  deleteCategory(request: ObjectId): Observable<CategoryDto>;

  search(request: SearchRequest): Observable<CategoryListDto>;
}

export interface CategoryServiceController {
  createCategory(
    request: CategoryRequest,
  ): Promise<CategoryDto> | Observable<CategoryDto> | CategoryDto;

  updateCategory(
    request: CategoryDto,
  ): Promise<CategoryDto> | Observable<CategoryDto> | CategoryDto;

  deleteCategory(
    request: ObjectId,
  ): Promise<CategoryDto> | Observable<CategoryDto> | CategoryDto;

  search(
    request: SearchRequest,
  ): Promise<CategoryListDto> | Observable<CategoryListDto> | CategoryListDto;
}

export function CategoryServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createCategory',
      'updateCategory',
      'deleteCategory',
      'search',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('CategoryService', method)(
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
      GrpcStreamMethod('CategoryService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const CATEGORY_SERVICE_NAME = 'CategoryService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
