// Original file: src/protobuf/user.proto

import type { UserResponse as _usermgmt_UserResponse, UserResponse__Output as _usermgmt_UserResponse__Output } from '../usermgmt/UserResponse';

export interface UserListResponse {
  'users'?: (_usermgmt_UserResponse)[];
  'total'?: (number);
}

export interface UserListResponse__Output {
  'users'?: (_usermgmt_UserResponse__Output)[];
  'total'?: (number);
}
