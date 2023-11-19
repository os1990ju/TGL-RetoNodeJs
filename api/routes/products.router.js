const express = require('express');


const router = express.Router();
const ProductService = require('../services/product.services');
const validatorHandler = require('../middlewares/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema')
const productService = new ProductService();
const productController = require('../controllers/product.controller');

router.get('/',productController.getAll)

router.get('/:id',
validatorHandler(getProductSchema,'params'),
productController.getById)

router.post('/',
validatorHandler(createProductSchema,'body'),
productController.createProduct)

router.patch('/:id',
validatorHandler(updateProductSchema,'params'),
validatorHandler(updateProductSchema,'body'),
productController.updateProduct
)

router.delete('/:id', productController.deleteProduct)

module.exports = router;
