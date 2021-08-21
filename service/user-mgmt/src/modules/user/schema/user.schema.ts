
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Address } from "../../address/schema/address.schema";
import { Organization } from "../../organization/schema/organization.schema";
import { Profile } from "../../profile/schema/profile.schema";

@Schema({
    autoCreate: true,
    collection: User.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class User extends Document {
    @Prop()
    public userName: string;

    @Prop()
    password: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
    profile: Profile;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }] })
    addresss: Address[];

    @Prop({ type: [{ type: mongoose.Schema.Types.String }] })
    permissions: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
    organization: Organization;
}
export const UserSchema = SchemaFactory.createForClass(User);