import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _user_UserServiceClient, UserServiceDefinition as _user_UserServiceDefinition } from './user/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    AddressDto: MessageTypeDefinition
    OperatorDto: MessageTypeDefinition
    ProfileDto: MessageTypeDefinition
    QueryDto: MessageTypeDefinition
    SearchRequest: MessageTypeDefinition
    UserDto: MessageTypeDefinition
    UserId: MessageTypeDefinition
    UserListDto: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _user_UserServiceClient> & { service: _user_UserServiceDefinition }
  }
}

