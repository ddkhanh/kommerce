// Original file: src/protobuf/user.proto

import type { UserDto as _user_UserDto, UserDto__Output as _user_UserDto__Output } from '../user/UserDto';

export interface OperatorDto {
  'user'?: (_user_UserDto | null);
  'orgsManagement'?: (string)[];
}

export interface OperatorDto__Output {
  'user'?: (_user_UserDto__Output);
  'orgsManagement'?: (string)[];
}
