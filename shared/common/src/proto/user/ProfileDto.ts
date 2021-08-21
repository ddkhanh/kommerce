// Original file: src/protobuf/user.proto

import type { Long } from '@grpc/proto-loader';

export interface ProfileDto {
  'id'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'phone'?: (string);
  'gender'?: (string);
  'photo'?: (string);
  'dateOfBirth'?: (number | string | Long);
  '_phone'?: "phone";
  '_gender'?: "gender";
  '_photo'?: "photo";
  '_dateOfBirth'?: "dateOfBirth";
}

export interface ProfileDto__Output {
  'id'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'phone'?: (string);
  'gender'?: (string);
  'photo'?: (string);
  'dateOfBirth'?: (string);
  '_phone': "phone";
  '_gender': "gender";
  '_photo': "photo";
  '_dateOfBirth': "dateOfBirth";
}
