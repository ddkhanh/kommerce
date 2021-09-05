/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';

export const protobufPackage = 'usermgmt';

/** hero/hero.proto */

export enum Operator {
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

export interface ObjectId {
  id: string;
}

export interface OrganizationResponse {
  id: string;
  name: string;
  description: string;
  uperOrgId: string;
  createdAt: number;
  updatedAt: number;
}

export interface OrganizationRequest {
  name: string;
  description: string;
  uperOrgId: string;
}

export interface OrganizatioListResponse {
  orgs: OrganizationResponse[];
  total: number;
}

export interface UpperOrgRequest {
  orgId: string;
  upperOrgId: string;
}

export interface UserOrgRequest {
  orgId: string;
  userId: string;
}

export interface SearchCriteria {
  name: string;
  value: string;
  operator: Operator;
}

export interface SearchRequest {
  criterias: SearchCriteria[];
  or: boolean;
  page: number;
  limit: number;
}

/**
 * LoginRequest to perform a native login using user storing in DB
 * password must be in plaintext.
 */
export interface LoginRequest {
  /** userName for searching in DB and must not be null */
  userName: string;
  /** password in plaintext format */
  password: string;
}

export interface UserListResponse {
  users: UserResponse[];
  total: number;
}

export interface UserResponse {
  id: string;
  userName: string;
  password: string;
  orgId: string;
  profile: UserProfile | undefined;
  addresses: UserAddress[];
  createdAt: number;
  updatedAt: number;
}

export interface UserRequest {
  userName: string;
  password: string;
  orgId: string;
  profile: UserProfile | undefined;
  addresses: UserAddress[];
}

export interface UserAddress {
  street: string;
  ward: string;
  district: string;
  city: string;
  state: string;
  country: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  photo: string;
  dateOfBirth: number;
}

export interface OperatorRequest {
  user: UserRequest | undefined;
  orgsManagement: string[];
}

export const USERMGMT_PACKAGE_NAME = 'usermgmt';

export interface UserServiceClient {
  findUserById(request: ObjectId): Observable<UserResponse>;

  createUser(request: UserRequest): Observable<UserResponse>;

  updateUser(request: UserResponse): Observable<UserResponse>;

  searchUsers(request: SearchRequest): Observable<UserListResponse>;

  addUserToOrg(request: UserOrgRequest): Observable<UserResponse>;

  /** Perform native login using user stroing in Database by given user and password */

  nativeLogin(request: LoginRequest): Observable<UserResponse>;
}

export interface UserServiceController {
  findUserById(
    request: ObjectId,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  createUser(
    request: UserRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  updateUser(
    request: UserResponse,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  searchUsers(
    request: SearchRequest,
  ):
    | Promise<UserListResponse>
    | Observable<UserListResponse>
    | UserListResponse;

  addUserToOrg(
    request: UserOrgRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  /** Perform native login using user stroing in Database by given user and password */

  nativeLogin(
    request: LoginRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'findUserById',
      'createUser',
      'updateUser',
      'searchUsers',
      'addUserToOrg',
      'nativeLogin',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('UserService', method)(
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
      GrpcStreamMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const USER_SERVICE_NAME = 'UserService';

export interface OrganizationServiceClient {
  findOrgById(request: ObjectId): Observable<OrganizationResponse>;

  createOrg(request: OrganizationRequest): Observable<OrganizationResponse>;

  updateOrg(request: OrganizationResponse): Observable<OrganizationResponse>;

  searchOrgs(request: SearchRequest): Observable<OrganizatioListResponse>;

  setUpperOrg(request: UpperOrgRequest): Observable<OrganizationResponse>;
}

export interface OrganizationServiceController {
  findOrgById(
    request: ObjectId,
  ):
    | Promise<OrganizationResponse>
    | Observable<OrganizationResponse>
    | OrganizationResponse;

  createOrg(
    request: OrganizationRequest,
  ):
    | Promise<OrganizationResponse>
    | Observable<OrganizationResponse>
    | OrganizationResponse;

  updateOrg(
    request: OrganizationResponse,
  ):
    | Promise<OrganizationResponse>
    | Observable<OrganizationResponse>
    | OrganizationResponse;

  searchOrgs(
    request: SearchRequest,
  ):
    | Promise<OrganizatioListResponse>
    | Observable<OrganizatioListResponse>
    | OrganizatioListResponse;

  setUpperOrg(
    request: UpperOrgRequest,
  ):
    | Promise<OrganizationResponse>
    | Observable<OrganizationResponse>
    | OrganizationResponse;
}

export function OrganizationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'findOrgById',
      'createOrg',
      'updateOrg',
      'searchOrgs',
      'setUpperOrg',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('OrganizationService', method)(
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
      GrpcStreamMethod('OrganizationService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ORGANIZATION_SERVICE_NAME = 'OrganizationService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
