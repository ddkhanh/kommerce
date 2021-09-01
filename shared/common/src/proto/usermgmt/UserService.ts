// Original file: src/protobuf/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ObjectId as _usermgmt_ObjectId, ObjectId__Output as _usermgmt_ObjectId__Output } from '../usermgmt/ObjectId';
import type { SearchRequest as _usermgmt_SearchRequest, SearchRequest__Output as _usermgmt_SearchRequest__Output } from '../usermgmt/SearchRequest';
import type { UserListResponse as _usermgmt_UserListResponse, UserListResponse__Output as _usermgmt_UserListResponse__Output } from '../usermgmt/UserListResponse';
import type { UserOrgRequest as _usermgmt_UserOrgRequest, UserOrgRequest__Output as _usermgmt_UserOrgRequest__Output } from '../usermgmt/UserOrgRequest';
import type { UserRequest as _usermgmt_UserRequest, UserRequest__Output as _usermgmt_UserRequest__Output } from '../usermgmt/UserRequest';
import type { UserResponse as _usermgmt_UserResponse, UserResponse__Output as _usermgmt_UserResponse__Output } from '../usermgmt/UserResponse';

export interface UserServiceClient extends grpc.Client {
  addUserToOrg(argument: _usermgmt_UserOrgRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  addUserToOrg(argument: _usermgmt_UserOrgRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
  createUser(argument: _usermgmt_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _usermgmt_UserRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
  findUserById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  findUserById(argument: _usermgmt_ObjectId, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
  searchUsers(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _usermgmt_SearchRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserListResponse__Output) => void): grpc.ClientUnaryCall;
  
  updateUser(argument: _usermgmt_UserResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _usermgmt_UserResponse, callback: (error?: grpc.ServiceError, result?: _usermgmt_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  addUserToOrg: grpc.handleUnaryCall<_usermgmt_UserOrgRequest__Output, _usermgmt_UserResponse>;
  
  createUser: grpc.handleUnaryCall<_usermgmt_UserRequest__Output, _usermgmt_UserResponse>;
  
  findUserById: grpc.handleUnaryCall<_usermgmt_ObjectId__Output, _usermgmt_UserResponse>;
  
  searchUsers: grpc.handleUnaryCall<_usermgmt_SearchRequest__Output, _usermgmt_UserListResponse>;
  
  updateUser: grpc.handleUnaryCall<_usermgmt_UserResponse__Output, _usermgmt_UserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  addUserToOrg: MethodDefinition<_usermgmt_UserOrgRequest, _usermgmt_UserResponse, _usermgmt_UserOrgRequest__Output, _usermgmt_UserResponse__Output>
  createUser: MethodDefinition<_usermgmt_UserRequest, _usermgmt_UserResponse, _usermgmt_UserRequest__Output, _usermgmt_UserResponse__Output>
  findUserById: MethodDefinition<_usermgmt_ObjectId, _usermgmt_UserResponse, _usermgmt_ObjectId__Output, _usermgmt_UserResponse__Output>
  searchUsers: MethodDefinition<_usermgmt_SearchRequest, _usermgmt_UserListResponse, _usermgmt_SearchRequest__Output, _usermgmt_UserListResponse__Output>
  updateUser: MethodDefinition<_usermgmt_UserResponse, _usermgmt_UserResponse, _usermgmt_UserResponse__Output, _usermgmt_UserResponse__Output>
}
