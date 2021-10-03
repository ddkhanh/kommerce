
import { KommerceDocument } from '@kommerce/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    collection: ProductOption.name,
    autoCreate: true,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
    versionKey: "version"
})
export class ProductOption extends KommerceDocument {
    @Prop()
    name: string;

    @Prop()
    code: string;

    @Prop()
    description: string;
}

export const ProductOptionSchema = SchemaFactory.createForClass(ProductOption);