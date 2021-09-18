/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'inventory';

/**
 * After chaing this file, your have trigger code generation for this by issuing
 * yarn gen
 */

export enum CriteriaMethod {
  /** eq - equals */
  eq = 0,
  /** gt - greater than */
  gt = 1,
  /** lt - less than */
  lt = 2,
  /** ne - not equals */
  ne = 3,
  /** in - in */
  in = 4,
  /** sw - starts with */
  sw = 5,
  /** ew - ends with */
  ew = 6,
  /** ct - contains */
  ct = 7,
  /** regex - reqgular expression */
  regex = 8,
  UNRECOGNIZED = -1,
}

export interface ObjectId {
  id: string;
}

export interface SearchCriteria {
  name: string;
  value: string;
  md: CriteriaMethod;
}

export interface SearchRequest {
  criterias: SearchCriteria[];
  or: boolean;
  page: number;
  limit: number;
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
