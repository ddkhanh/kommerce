// Original file: src/protobuf/user.proto

import type { UserProfile as _usermgmt_UserProfile, UserProfile__Output as _usermgmt_UserProfile__Output } from '../usermgmt/UserProfile';
import type { UserAddress as _usermgmt_UserAddress, UserAddress__Output as _usermgmt_UserAddress__Output } from '../usermgmt/UserAddress';
import type { Long } from '@grpc/proto-loader';

export interface UserResponse {
  'id'?: (string);
  'userName'?: (string);
  'password'?: (string);
  'orgId'?: (string);
  'profile'?: (_usermgmt_UserProfile | null);
  'addresses'?: (_usermgmt_UserAddress)[];
  'createdAt'?: (number | string | Long);
  'updatedAt'?: (number | string | Long);
}

export interface UserResponse__Output {
  'id'?: (string);
  'userName'?: (string);
  'password'?: (string);
  'orgId'?: (string);
  'profile'?: (_usermgmt_UserProfile__Output);
  'addresses'?: (_usermgmt_UserAddress__Output)[];
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
