// Original file: src/protobuf/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SearchRequest as _user_SearchRequest, SearchRequest__Output as _user_SearchRequest__Output } from '../user/SearchRequest';
import type { UserDto as _user_UserDto, UserDto__Output as _user_UserDto__Output } from '../user/UserDto';
import type { UserId as _user_UserId, UserId__Output as _user_UserId__Output } from '../user/UserId';
import type { UserListDto as _user_UserListDto, UserListDto__Output as _user_UserListDto__Output } from '../user/UserListDto';

export interface UserServiceClient extends grpc.Client {
  createUser(argument: _user_UserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_UserDto, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  
  getUser(argument: _user_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  
  updateUser(argument: _user_UserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_UserDto, callback: (error?: grpc.ServiceError, result?: _user_UserDto__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<_user_UserDto__Output, _user_UserDto>;
  
  getUser: grpc.handleUnaryCall<_user_UserId__Output, _user_UserDto>;
  
  searchUsers: grpc.handleUnaryCall<_user_SearchRequest__Output, _user_UserListDto>;
  
  updateUser: grpc.handleUnaryCall<_user_UserDto__Output, _user_UserDto>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  createUser: MethodDefinition<_user_UserDto, _user_UserDto, _user_UserDto__Output, _user_UserDto__Output>
  getUser: MethodDefinition<_user_UserId, _user_UserDto, _user_UserId__Output, _user_UserDto__Output>
  searchUsers: MethodDefinition<_user_SearchRequest, _user_UserListDto, _user_SearchRequest__Output, _user_UserListDto__Output>
  updateUser: MethodDefinition<_user_UserDto, _user_UserDto, _user_UserDto__Output, _user_UserDto__Output>
}
