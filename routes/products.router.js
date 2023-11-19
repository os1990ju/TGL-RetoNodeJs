const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/',(req,res)=>{
  const {size} = req.query;

  const products = [];
  for (let index = 0; index < (size?size:5); index++){
    products.push({
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image:faker.image.imageUrl(),
    });
  }
  res.json(products);
})
router.get('/filter', (req, res)=>{
  res.send('soy un filter me debes llamar antes del llamado de ruta dinamica :id')
})
router.get('/:id', (req, res)=>{
  const { id } = req.params
  res.json({
    id,
    name:'product 2',
    value:2000
  })
})

router.post('/', (req, res)=>{
  const {name, price} = req.body;
  res.status('201').json({
    message:'created',
    data:{
      name,
    price
    }
  })
})

module.exports = router;
