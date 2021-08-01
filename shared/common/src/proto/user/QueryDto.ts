// Original file: src/protobuf/user.proto


// Original file: src/protobuf/user.proto

export enum _user_QueryDto_method {
  eq = 0,
  gt = 1,
  lt = 2,
  ne = 3,
  in = 4,
  sw = 5,
  ew = 6,
  ct = 7,
  regex = 8,
}

export interface QueryDto {
  'name'?: (string);
  'value'?: (string);
}

export interface QueryDto__Output {
  'name'?: (string);
  'value'?: (string);
}
