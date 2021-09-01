// Original file: src/protobuf/user.proto

import type { Long } from '@grpc/proto-loader';

export interface OrganizationResponse {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'uperOrgId'?: (string);
  'createdAt'?: (number | string | Long);
  'updatedAt'?: (number | string | Long);
}

export interface OrganizationResponse__Output {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'uperOrgId'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
