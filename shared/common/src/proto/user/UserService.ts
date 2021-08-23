// Original file: src/protobuf/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserDto as _user_CreateUserDto, CreateUserDto__Output as _user_CreateUserDto__Output } from '../user/CreateUserDto';
import type { SearchUserDto as _user_SearchUserDto, SearchUserDto__Output as _user_SearchUserDto__Output } from '../user/SearchUserDto';
import type { UserId as _user_UserId, UserId__Output as _user_UserId__Output } from '../user/UserId';
import type { UserListDto as _user_UserListDto, UserListDto__Output as _user_UserListDto__Output } from '../user/UserListDto';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from '../user/UserResponse';

export interface UserServiceClient extends grpc.Client {
  createUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserDto, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
  getUser(argument: _user_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
  searchUsers(argument: _user_SearchUserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchUserDto, callback: (error?: grpc.ServiceError, result?: _user_UserListDto__Output) => void): grpc.ClientUnaryCall;
  
  updateUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  updateUser(argument: _user_CreateUserDto, callback: (error?: grpc.ServiceError, result?: _user_UserResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<_user_CreateUserDto__Output, _user_UserResponse>;
  
  getUser: grpc.handleUnaryCall<_user_UserId__Output, _user_UserResponse>;
  
  searchUsers: grpc.handleUnaryCall<_user_SearchUserDto__Output, _user_UserListDto>;
  
  updateUser: grpc.handleUnaryCall<_user_CreateUserDto__Output, _user_UserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  createUser: MethodDefinition<_user_CreateUserDto, _user_UserResponse, _user_CreateUserDto__Output, _user_UserResponse__Output>
  getUser: MethodDefinition<_user_UserId, _user_UserResponse, _user_UserId__Output, _user_UserResponse__Output>
  searchUsers: MethodDefinition<_user_SearchUserDto, _user_UserListDto, _user_SearchUserDto__Output, _user_UserListDto__Output>
  updateUser: MethodDefinition<_user_CreateUserDto, _user_UserResponse, _user_CreateUserDto__Output, _user_UserResponse__Output>
}
