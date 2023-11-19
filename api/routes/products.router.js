const express = require('express');


const router = express.Router();
const ProductService = require('../services/product.services');
const validatorHandler = require('../middlewares/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema')
const productService = new ProductService();


router.get('/',async (req,res, next)=>{
  try{
    const body = req.query;
  const products = await productService.findAll(body)
  res.status(200).json(products);
  }catch(err){
    next(err);
  }
})
router.get('/filter', async (req, res)=>{
  res.send('soy un filter me debes llamar antes del llamado de ruta dinamica :id')
})
router.get('/:id',
validatorHandler(getProductSchema,'params'),
async (req, res, next)=>{
  try{
    const { id } = req.params
  const product = await productService.findOne(id);
  res.status(200).json({
      product
    })
  }catch(error){
    //ejecuta middleware de tipo error
    next(error)
  }

})

router.post('/',
validatorHandler(createProductSchema,'body'),
async (req, res)=>{
  const body = req.body;
  const newProduct = await productService.create(body)
  res.status(201).json({
    message:'created',
    data:{
      newProduct
    }
  })
})
router.patch('/:id',
validatorHandler(updateProductSchema,'body'),
validatorHandler(updateProductSchema,'params'),
async (req, res, next)=>{
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await productService.update(id, body);
    res.json(product);
  }catch(err){
    next(err);
  }
})

router.delete('/:id', async (req, res, next)=>{
  try{
    const { id } = req.params;
  const rta = await productService.delete(id);
  res.json(rta);
  }catch(err){
    next(err);
  }
})

module.exports = router;
