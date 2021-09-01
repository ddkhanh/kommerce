// Original file: src/protobuf/user.proto

import type { Long } from '@grpc/proto-loader';

export interface UserProfile {
  'firstName'?: (string);
  'lastName'?: (string);
  'phone'?: (string);
  'gender'?: (string);
  'photo'?: (string);
  'dateOfBirth'?: (number | string | Long);
}

export interface UserProfile__Output {
  'firstName'?: (string);
  'lastName'?: (string);
  'phone'?: (string);
  'gender'?: (string);
  'photo'?: (string);
  'dateOfBirth'?: (string);
}
