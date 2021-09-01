// Original file: src/protobuf/user.proto

import type { UserRequest as _usermgmt_UserRequest, UserRequest__Output as _usermgmt_UserRequest__Output } from '../usermgmt/UserRequest';

export interface OperatorRequest {
  'user'?: (_usermgmt_UserRequest | null);
  'orgsManagement'?: (string)[];
}

export interface OperatorRequest__Output {
  'user'?: (_usermgmt_UserRequest__Output);
  'orgsManagement'?: (string)[];
}
