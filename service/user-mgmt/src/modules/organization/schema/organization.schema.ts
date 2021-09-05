
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({
    autoCreate: true,
    collection: Organization.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Organization extends Document {
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Organization.name })
    upperOrg: Organization;

    /** To be injected by mongoose */
    createdAt: Date;

    /** To be injected by mongoose */
    updatedAt: Date;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);