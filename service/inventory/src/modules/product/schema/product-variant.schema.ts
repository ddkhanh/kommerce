
import { KommerceDocument } from '@kommerce/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Asset } from '../../asset/schema/asset.schema';
import { ProductOption, ProductOptionSchema } from './product-option.schema';

@Schema({
    collection: ProductVariant.name,
    autoCreate: true,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
    versionKey: "version"
})
export class ProductVariant extends KommerceDocument {
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop()
    enabled: boolean;

    @Prop()
    stockOnHand: number;

    @Prop()
    stockAllocated: number;

    @Prop()
    outOfStockThreshold: number;

    @Prop({ type: [{type: ProductOptionSchema }]})
    options: ProductOption[];

    @Prop()
    sku: string;
   
    @Prop()
    price: number;

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Asset.name }]})
    assets: Asset[];

}

export const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);