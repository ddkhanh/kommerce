/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'inventory';

/**
 * After chaing this file, your have trigger code generation for this by issuing
 * yarn gen
 */

export interface Asset {
  name: string;
}

export const INVENTORY_PACKAGE_NAME = 'inventory';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
