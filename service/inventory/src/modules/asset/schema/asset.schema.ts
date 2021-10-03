
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { KommerceDocument } from '@kommerce/common';
import { KommerceSchema } from '../../../schema/common.schema';

@Schema({
    autoCreate: true,
    collection: Asset.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
    versionKey: "version"
})
export class Asset extends KommerceSchema {
    @Prop()
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    type: AssetType;

    @Prop()
    width: number;

    @Prop()
    height: number;

    @Prop()
    source: string;

    @Prop()
    preview: string;

    @Prop()
    fileSize: number;
}

export enum AssetType {
    IMAGE,
    VIDEO,
    BINARY
}
export type AssetDocument = Asset & Document;
export const AssetSchema = SchemaFactory.createForClass(Asset);