import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const AddressSchema = SchemaFactory.createForClass(Address);