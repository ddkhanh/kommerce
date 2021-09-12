
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Asset } from '../../asset/schema/asset.schema';
import { Category } from '../../category/schema/category.schema';
import { ProductVariant, ProductVariantSchema } from './product-variant.schema';
import * as mongoose from 'mongoose';
import { KommerceDocument } from '@kommerce/common';

@Schema({
    autoCreate: true,
    collection: Product.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Product extends KommerceDocument{
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop()
    qualityStock: number;

    @Prop({ type: [{ type: ProductVariantSchema }] })
    variants: ProductVariant[];

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Asset.name }]})
    assets: Asset[];

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Category.name }]})
    categories: Category[];

}

export type ProductDocument = Product & mongoose.Document;

export const ProductSchema = SchemaFactory.createForClass(Product);