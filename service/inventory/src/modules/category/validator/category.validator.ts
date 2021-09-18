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

/** Validate CreateCategory request, in here it don't required id */
export const CreateCategoryValidator = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    parent: mongoId
})

/** The update Category request have the same with create except it require 1 more id field for the query */
export const UpdateCategoryValidator = CreateCategoryValidator.keys({
    id: mongoId.required(),
})

export const SearchRequestValidator = Joi.object({
    criterias: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        value: Joi.any().required(),
        md: Joi.number()
    })),
    or: Joi.boolean(),
    page: Joi.number().positive(),
    limit: Joi.number().positive()
})
