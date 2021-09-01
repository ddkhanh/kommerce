// Original file: src/protobuf/user.proto

import type { SearchCriteria as _usermgmt_SearchCriteria, SearchCriteria__Output as _usermgmt_SearchCriteria__Output } from '../usermgmt/SearchCriteria';

export interface SearchRequest {
  'criterias'?: (_usermgmt_SearchCriteria)[];
  'or'?: (boolean);
  'page'?: (number);
  'limit'?: (number);
}

export interface SearchRequest__Output {
  'criterias'?: (_usermgmt_SearchCriteria__Output)[];
  'or'?: (boolean);
  'page'?: (number);
  'limit'?: (number);
}
