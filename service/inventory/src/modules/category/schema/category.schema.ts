
import { KommerceDocument } from '@kommerce/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { KommerceSchema } from '../../../schema/common.schema';

@Schema({
    collection: Category.name,
    autoCreate: true,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
    versionKey: "version"
})
export class Category extends KommerceSchema {
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
    parent: Category;
}

export const CategorySchema = SchemaFactory.createForClass(Category);