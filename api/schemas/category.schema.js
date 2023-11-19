const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30); 
const description = Joi.string().min(5).max(100); 

const createCategorySchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateCategorySchema = Joi.object({
  name: name,
  description: description,
  id: id.required(),
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema };
