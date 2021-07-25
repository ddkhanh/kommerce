// Original file: ..\protobuf\user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SearchRequest as _user_SearchRequest, SearchRequest__Output as _user_SearchRequest__Output } from '../user/SearchRequest';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserId as _user_UserId, UserId__Output as _user_UserId__Output } from '../user/UserId';
import type { Users as _user_Users, Users__Output as _user_Users__Output } from '../user/Users';

export interface UserServiceClient extends grpc.Client {
  getUser(argument: _user_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _user_UserId, callback: (error?: grpc.ServiceError, result?: _user_User__Output) => void): grpc.ClientUnaryCall;
  
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  searchUsers(argument: _user_SearchRequest, callback: (error?: grpc.ServiceError, result?: _user_Users__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  getUser: grpc.handleUnaryCall<_user_UserId__Output, _user_User>;
  
  searchUsers: grpc.handleUnaryCall<_user_SearchRequest__Output, _user_Users>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  getUser: MethodDefinition<_user_UserId, _user_User, _user_UserId__Output, _user_User__Output>
  searchUsers: MethodDefinition<_user_SearchRequest, _user_Users, _user_SearchRequest__Output, _user_Users__Output>
}
