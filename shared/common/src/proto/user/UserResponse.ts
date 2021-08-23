// Original file: src/protobuf/user.proto

import type { UserDto as _user_UserDto, UserDto__Output as _user_UserDto__Output } from '../user/UserDto';
import type { ErrorResponse as _user_ErrorResponse, ErrorResponse__Output as _user_ErrorResponse__Output } from '../user/ErrorResponse';

export interface UserResponse {
  'result'?: (_user_UserDto | null);
  'error'?: (_user_ErrorResponse | null);
}

export interface UserResponse__Output {
  'result'?: (_user_UserDto__Output);
  'error'?: (_user_ErrorResponse__Output);
}
