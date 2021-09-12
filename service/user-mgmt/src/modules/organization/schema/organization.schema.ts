
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { KommerceDocument } from '@kommerce/common';

@Schema({
    autoCreate: true,
    collection: Organization.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Organization extends KommerceDocument {
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Organization.name })
    upperOrg: Organization;
}

export type OrganizationDocument = Organization & Document;

export const OrganizationSchema = SchemaFactory.createForClass(Organization);