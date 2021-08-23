// Original file: src/protobuf/user.proto

import type { QueryDto as _user_QueryDto, QueryDto__Output as _user_QueryDto__Output } from '../user/QueryDto';

export interface SearchUserDto {
  'queries'?: (_user_QueryDto)[];
  'or'?: (boolean);
  'page'?: (number);
  'limit'?: (number);
  '_or'?: "or";
}

export interface SearchUserDto__Output {
  'queries'?: (_user_QueryDto__Output)[];
  'or'?: (boolean);
  'page'?: (number);
  'limit'?: (number);
  '_or': "or";
}
