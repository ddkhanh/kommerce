// Original file: src/protobuf/user.proto

import type { UserDto as _user_UserDto, UserDto__Output as _user_UserDto__Output } from '../user/UserDto';

export interface UserListDto {
  'users'?: (_user_UserDto)[];
  'total'?: (number);
}

export interface UserListDto__Output {
  'users'?: (_user_UserDto__Output)[];
  'total'?: (number);
}
