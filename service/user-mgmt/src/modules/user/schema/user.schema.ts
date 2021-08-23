
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Address, AddressSchema } from "./address.schema";
import { Organization } from "../../organization/schema/organization.schema";
import { Profile, ProfileSchema } from "./profile.schema";

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

    @Prop({ type: ProfileSchema })
    profile: Profile;

    @Prop({ type: [{ type: AddressSchema }] })
    addresss: Address[];

    @Prop({ type: [{ type: mongoose.Schema.Types.String }] })
    permissions: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Organization.name })
    organization: Organization;
}
export const UserSchema = SchemaFactory.createForClass(User);