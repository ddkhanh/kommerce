
import { KommerceDocument } from '@kommerce/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({
    autoCreate: true,
    collection: Category.name,
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
})
export class Category extends KommerceDocument {
    @Prop()
    name: string;
    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
    parent: Category;
}

export const CategorySchema = SchemaFactory.createForClass(Category);