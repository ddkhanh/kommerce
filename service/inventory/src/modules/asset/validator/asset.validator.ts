import * as Joi from 'joi';
import { UpdateConditionsValidator, mongoId } from '../../../validator/common.validator';


/** Validate CreateAsset request, in here it don't required id */
export const CreateAssetValidator = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    qualityStock: Joi.number().positive(),
    assets: Joi.array().items(mongoId),
    variants: Joi.array().items(Joi.object()),
    categories: Joi.array().items(mongoId),
})

/** The update product request have the same with create except it require 1 more id field for the query */
export const UpdateAssetValidator = Joi.object({
    conditions: UpdateConditionsValidator.required(),
    data: CreateAssetValidator.required()
})