
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { KommerceDocument } from '@kommerce/common';

@Schema({
    autoCreate: true,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
    versionKey: "version"
})
export class KommerceSchema{
    /** objectId storing in Mongo */
    id: string

    /** To be injected by mongoose */
   readonly createdAt?: Date;

    /** To be injected by mongoose */
   readonly updatedAt?: Date;

    /** To be injected by mongoose */
    version: number;
}