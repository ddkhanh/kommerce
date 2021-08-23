// Original file: src/protobuf/user.proto

import type { ProfileDto as _user_ProfileDto, ProfileDto__Output as _user_ProfileDto__Output } from '../user/ProfileDto';
import type { AddressDto as _user_AddressDto, AddressDto__Output as _user_AddressDto__Output } from '../user/AddressDto';

export interface CreateUserDto {
  'userName'?: (string);
  'password'?: (string);
  'orgId'?: (string);
  'profile'?: (_user_ProfileDto | null);
  'addresses'?: (_user_AddressDto)[];
  '_orgId'?: "orgId";
}

export interface CreateUserDto__Output {
  'userName'?: (string);
  'password'?: (string);
  'orgId'?: (string);
  'profile'?: (_user_ProfileDto__Output);
  'addresses'?: (_user_AddressDto__Output)[];
  '_orgId': "orgId";
}
