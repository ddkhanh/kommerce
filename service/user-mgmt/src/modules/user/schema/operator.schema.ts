import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Organization } from "../../organization/schema/organization.schema";
import { User } from "./user.schema";


@Schema({
    autoCreate: true,
    collection: Operator.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Operator extends Document {
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: User

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Organization.name }] })
    orgsManagement: Organization[]
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);