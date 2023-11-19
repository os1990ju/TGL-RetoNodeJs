const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('../schemas/category.schema');
const categoryService = new CategoryService();
const categoryController = require('../controllers/categories.controller');

router.get('/', categoryController.getAllCategories);

router.get('/:id', validatorHandler(getCategorySchema, 'params'), categoryController.getCategoryById);

router.post('/', validatorHandler(createCategorySchema, 'body'), categoryController.createCategory);

router.patch(
  '/:id',
  validatorHandler(updateCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  categoryController.updateCategory
);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
