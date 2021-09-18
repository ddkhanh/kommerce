import * as Joi from 'joi';
import { Types } from 'mongoose';

/**
 * Prefer to this link for the [message syntax](https://joi.dev/api/?v=17.4.2#template-syntax)
 * Validate mongo id format
 */
const mongoId = Joi.string().custom( (value: string, helpers: Joi.CustomHelpers) => {
    if (value && !Types.ObjectId.isValid(value)) {
        return helpers.error('mongo.invalidId')
    }
    return value;
}, "MongoId Validator").messages({ 'mongo.invalidId': '"{#label}" must be a valid MongoId' });

/**
 * Validate ObjectId instance
 */
export const MongoIdValidator = Joi.object({
    id: mongoId.required()
})

/** Validate CreateProduct request, in here it don't required id */
export const CreateProductValidator = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string(),

    qualityStock: Joi.number().positive(),

    assets: Joi.array().items(mongoId),
    variants: Joi.array().items(mongoId),
    categories: Joi.array().items(mongoId),
})

/** The update product request have the same with create except it require 1 more id field for the query */
export const UpdateProductValidator = CreateProductValidator.keys({
    id: mongoId.required(),
})

export const SearchRequestValidator = Joi.object({
    criterias: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        value: Joi.any().required()
    })),
    or: Joi.boolean(),
    page: Joi.number().positive(),
    limit: Joi.number().positive()
})

export const ProductVariantValidator = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    sku: Joi.string().min(3).required(),
    price: Joi.number().min(0),
    assets: Joi.array().items(mongoId),
});
