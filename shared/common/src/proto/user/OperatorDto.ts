// Original file: src/protobuf/user.proto

import type { CreateUserDto as _user_CreateUserDto, CreateUserDto__Output as _user_CreateUserDto__Output } from '../user/CreateUserDto';

export interface OperatorDto {
  'user'?: (_user_CreateUserDto | null);
  'orgsManagement'?: (string)[];
}

export interface OperatorDto__Output {
  'user'?: (_user_CreateUserDto__Output);
  'orgsManagement'?: (string)[];
}
