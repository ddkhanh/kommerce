import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrganizationServiceClient as _usermgmt_OrganizationServiceClient, OrganizationServiceDefinition as _usermgmt_OrganizationServiceDefinition } from './usermgmt/OrganizationService';
import type { UserServiceClient as _usermgmt_UserServiceClient, UserServiceDefinition as _usermgmt_UserServiceDefinition } from './usermgmt/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  usermgmt: {
    ObjectId: MessageTypeDefinition
    OperatorRequest: MessageTypeDefinition
    OrganizatioListResponse: MessageTypeDefinition
    OrganizationRequest: MessageTypeDefinition
    OrganizationResponse: MessageTypeDefinition
    OrganizationService: SubtypeConstructor<typeof grpc.Client, _usermgmt_OrganizationServiceClient> & { service: _usermgmt_OrganizationServiceDefinition }
    SearchCriteria: MessageTypeDefinition
    SearchRequest: MessageTypeDefinition
    UserAddress: MessageTypeDefinition
    UserListResponse: MessageTypeDefinition
    UserOrgRequest: MessageTypeDefinition
    UserProfile: MessageTypeDefinition
    UserRequest: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _usermgmt_UserServiceClient> & { service: _usermgmt_UserServiceDefinition }
  }
}

