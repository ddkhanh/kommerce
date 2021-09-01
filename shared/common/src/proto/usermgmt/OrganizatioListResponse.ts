// Original file: src/protobuf/user.proto

import type { OrganizationResponse as _usermgmt_OrganizationResponse, OrganizationResponse__Output as _usermgmt_OrganizationResponse__Output } from '../usermgmt/OrganizationResponse';

export interface OrganizatioListResponse {
  'orgs'?: (_usermgmt_OrganizationResponse)[];
  'total'?: (number);
}

export interface OrganizatioListResponse__Output {
  'orgs'?: (_usermgmt_OrganizationResponse__Output)[];
  'total'?: (number);
}
