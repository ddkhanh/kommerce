
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({
    autoCreate: true,
    collection: Organization.NAME,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Organization extends Document {
    public static readonly NAME: string = "profile";
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
    uperOrg: Organization;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);