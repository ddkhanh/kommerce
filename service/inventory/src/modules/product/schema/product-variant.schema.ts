
import { KommerceDocument } from '@kommerce/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Asset } from '../../asset/schema/asset.schema';

@Schema({
    autoCreate: true,
    collection: ProductVariant.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class ProductVariant extends KommerceDocument {
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop()
    sku: string;
    
    @Prop()
    price: number;

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Asset.name }]})
    assets: Asset[];

}

export const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);