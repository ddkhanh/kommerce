/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { UpdateConditions, ObjectId, SearchRequest } from './common';

export const protobufPackage = 'inventory';

/**
 * After chaing this file, your have trigger code generation for this by issuing
 * yarn gen
 */

export enum AssetType {
  IMAGE = 0,
  VIDEO = 1,
  BINARY = 2,
  UNRECOGNIZED = -1,
}

export interface CreateAssetRequest {
  name: string;
  type: AssetType;
  fileSize: number;
  mimeType: string;
  width: number;
  height: number;
  source: string;
  preview: string;
  description: string;
}

export interface UpdateAssetRequest {
  conditions: UpdateConditions | undefined;
  data: CreateAssetRequest | undefined;
}

export interface AssetDto {
  name: string;
  type: AssetType;
  fileSize: number;
  mimeType: string;
  width: number;
  height: number;
  source: string;
  preview: string;
  id: string;
  version: number;
  description: string;
}

export interface AssetListDto {
  assets: AssetDto[];
  total: number;
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

export interface AssetServiceClient {
  createAsset(request: CreateAssetRequest): Observable<AssetDto>;

  updateAsset(request: UpdateAssetRequest): Observable<AssetDto>;

  deleteAsset(request: ObjectId): Observable<AssetDto>;

  search(request: SearchRequest): Observable<AssetListDto>;
}

export interface AssetServiceController {
  createAsset(
    request: CreateAssetRequest,
  ): Promise<AssetDto> | Observable<AssetDto> | AssetDto;

  updateAsset(
    request: UpdateAssetRequest,
  ): Promise<AssetDto> | Observable<AssetDto> | AssetDto;

  deleteAsset(
    request: ObjectId,
  ): Promise<AssetDto> | Observable<AssetDto> | AssetDto;

  search(
    request: SearchRequest,
  ): Promise<AssetListDto> | Observable<AssetListDto> | AssetListDto;
}

export function AssetServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createAsset',
      'updateAsset',
      'deleteAsset',
      'search',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AssetService', method)(
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
      GrpcStreamMethod('AssetService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ASSET_SERVICE_NAME = 'AssetService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
