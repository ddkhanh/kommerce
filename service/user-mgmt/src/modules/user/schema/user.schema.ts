
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose';
import { Address, AddressSchema } from "./address.schema";
import { Organization } from "../../organization/schema/organization.schema";
import { Profile, ProfileSchema } from "./profile.schema";
import { KommerceDocument } from '@kommerce/common';
import { UserController } from '../user.controller';
const SALT_WORK_FACTOR = 10;

@Schema({
    autoCreate: true,
    collection: User.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class User extends KommerceDocument {
    @Prop()
    public userName: string;

    @Prop()
    password: string;

    @Prop({ type: ProfileSchema })
    profile: Profile;

    @Prop({ type: [{ type: AddressSchema }] })
    addresses: Address[];

    @Prop({ type: [{ type: mongoose.Schema.Types.String }] })
    permissions: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Organization.name })
    organization: Organization;

    /** To be injected by mongoose */
    createdAt: Date;

    /** To be injected by mongoose */
    updatedAt: Date;

    /**
     * Define this function for interacting with userSchema.
     * @param candidatePassword - the raw password to be hashed and compare the one storing in DB
     * @returns true|false - for the password matching
     */
    comparePassword: (candidatePassword: string) => boolean;
}
const userSchema = SchemaFactory.createForClass(User);
userSchema.pre('save', function (next: Function) {
    let user = this;
    if (!user.isModified('password')) {
        return next();
    }
    // generate a salt
    let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    let usr:User = (<any>user);
    let hash = bcrypt.hashSync(usr.password, salt);
    usr.password = hash;
    return next();
});
/** This function has to match the one we declare above in User document*/
userSchema.methods.comparePassword = function(candidatePassword) {
    let user = (<any>this);
    return bcrypt.compareSync(candidatePassword, user.password)
};
export type UserDocument = User & Document;
export const UserSchema = userSchema;