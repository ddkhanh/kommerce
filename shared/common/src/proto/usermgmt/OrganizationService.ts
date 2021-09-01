// Original file: src/protobuf/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ObjectId as _usermgmt_ObjectId, ObjectId__Output as _usermgmt_ObjectId__Output } from '../usermgmt/ObjectId';
import type { OrganizatioListResponse as _usermgmt_OrganizatioListResponse, OrganizatioListResponse__Output as _usermgmt_OrganizatioListResponse__Output } from '../usermgmt/OrganizatioListResponse';
import type { OrganizationRequest as _usermgmt_OrganizationRequest, OrganizationRequest__Output as _usermgmt_OrganizationRequest__Output } from '../usermgmt/OrganizationRequest';
import type { OrganizationResponse as _usermgmt_OrganizationResponse, OrganizationResponse__Output as _usermgmt_OrganizationResponse__Output } from '../usermgmt/OrganizationResponse';
import type { SearchRequest as _usermgmt_SearchRequest, SearchRequest__Output as _usermgmt_SearchRequest__Output } from '../usermgmt/SearchRequest';

export interface OrganizationServiceClient extends grpc.Client {
  createOrg(argument: _usermgmt_OrganizationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  createOrg(argument: _usermgmt_OrganizationRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  
  findOrgById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  findOrgById(argument: _usermgmt_ObjectId, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  
  searchOrgs(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  searchOrgs(argument: _usermgmt_SearchRequest, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizatioListResponse__Output) => void): grpc.ClientUnaryCall;
  
  updateOrg(argument: _usermgmt_OrganizationResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  updateOrg(argument: _usermgmt_OrganizationResponse, callback: (error?: grpc.ServiceError, result?: _usermgmt_OrganizationResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface OrganizationServiceHandlers extends grpc.UntypedServiceImplementation {
  createOrg: grpc.handleUnaryCall<_usermgmt_OrganizationRequest__Output, _usermgmt_OrganizationResponse>;
  
  findOrgById: grpc.handleUnaryCall<_usermgmt_ObjectId__Output, _usermgmt_OrganizationResponse>;
  
  searchOrgs: grpc.handleUnaryCall<_usermgmt_SearchRequest__Output, _usermgmt_OrganizatioListResponse>;
  
  updateOrg: grpc.handleUnaryCall<_usermgmt_OrganizationResponse__Output, _usermgmt_OrganizationResponse>;
  
}

export interface OrganizationServiceDefinition extends grpc.ServiceDefinition {
  createOrg: MethodDefinition<_usermgmt_OrganizationRequest, _usermgmt_OrganizationResponse, _usermgmt_OrganizationRequest__Output, _usermgmt_OrganizationResponse__Output>
  findOrgById: MethodDefinition<_usermgmt_ObjectId, _usermgmt_OrganizationResponse, _usermgmt_ObjectId__Output, _usermgmt_OrganizationResponse__Output>
  searchOrgs: MethodDefinition<_usermgmt_SearchRequest, _usermgmt_OrganizatioListResponse, _usermgmt_SearchRequest__Output, _usermgmt_OrganizatioListResponse__Output>
  updateOrg: MethodDefinition<_usermgmt_OrganizationResponse, _usermgmt_OrganizationResponse, _usermgmt_OrganizationResponse__Output, _usermgmt_OrganizationResponse__Output>
}
