// Original file: src/protobuf/user.proto

import type { UserProfile as _usermgmt_UserProfile, UserProfile__Output as _usermgmt_UserProfile__Output } from '../usermgmt/UserProfile';
import type { UserAddress as _usermgmt_UserAddress, UserAddress__Output as _usermgmt_UserAddress__Output } from '../usermgmt/UserAddress';

export interface UserRequest {
  'userName'?: (string);
  'password'?: (string);
  'orgId'?: (string);
  'profile'?: (_usermgmt_UserProfile | null);
  'addresses'?: (_usermgmt_UserAddress)[];
}

export interface UserRequest__Output {
  'userName'?: (string);
  'password'?: (string);
  'orgId'?: (string);
  'profile'?: (_usermgmt_UserProfile__Output);
  'addresses'?: (_usermgmt_UserAddress__Output)[];
}
