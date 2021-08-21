import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../user/schema/user.schema';

@Schema({
    autoCreate: true,
    collection: Address.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})

export class Address extends Document{
    @Prop()
    street: string;

    @Prop()
    ward: string;

    @Prop()
    district: string;
    
    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    country: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;  
}

export const AddressSchema = SchemaFactory.createForClass(Address);