const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  //const { categorieId, productId } = req.params;
  res.json([
    {
      categoriId:'1',
      categoriName:'Toys'
    },
    {
      categoriId:'2',
      categoriName:'Clothes'
    }
  ])
})

module.exports = router;
