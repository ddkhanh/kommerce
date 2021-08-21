
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Gender {
    FEMALE = "female",
    MALE = "male",
    UNKNOWN = "unknown"
}

@Schema({
    autoCreate: true,
    collection: Profile.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Profile extends Document{
    
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phone: string;

    @Prop({
        type: String,
        enum: Gender,        
        default: Gender.UNKNOWN
    })
    gender: string;

    @Prop()
    photo: string;

    @Prop()
    dateOfBirth: Date;
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);
