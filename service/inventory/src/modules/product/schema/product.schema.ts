
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Asset } from '../../asset/schema/asset.schema';
import { Category } from '../../category/schema/category.schema';
import { ProductVariant, ProductVariantSchema } from './product-variant.schema';
import * as mongoose from 'mongoose';
import { KommerceSchema } from '../../../schema/common.schema';

@Schema({
    collection: Product.name,
    autoCreate: true,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
    versionKey: "version"
})
export class Product extends KommerceSchema{
    @Prop({index: true})
    name: string;
    @Prop()
    description: string;
    
    @Prop({index: true})
    slug: string;

    @Prop({ type: [{type: ProductVariantSchema}]})
    variants: ProductVariant[];

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Asset.name }]})
    assets: Asset[];

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Category.name }]})
    categories: Category[] = [];

}

export type ProductDocument = Product & mongoose.Document;

export const ProductSchema = SchemaFactory.createForClass(Product);