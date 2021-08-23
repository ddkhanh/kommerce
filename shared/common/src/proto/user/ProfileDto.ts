// Original file: src/protobuf/user.proto

import type { Long } from '@grpc/proto-loader';

export interface ProfileDto {
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
