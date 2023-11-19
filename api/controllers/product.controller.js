const ProductService = require('../services/product.services');
const productService = new ProductService();

const getAll = async (req,res, next)=>{
  try{
    const body = req.query;
  const products = await productService.findAll()
  res.status(200).json(products);
  }catch(err){
    next(err);
  }
}
const getById = async (req, res, next)=>{
  try{
    const { id } = req.params
  const product = await productService.findOne(id);
  res.status(200).json({
      product
    })
  }catch(error){
    next(error)
  }

}

const createProduct =async (req, res)=>{
  const body = req.body;
  const newProduct = await productService.create(body)
  res.status(201).json({
    message:'created',
    data:{
      newProduct
    }
  })
}

const updateProduct = async (req, res, next)=>{
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await productService.update(id, body);
    res.json(product);
  }catch(err){
    next(err);
  }
}

const deleteProduct = async (req, res, next)=>{
  try{
    const { id } = req.params;
  const rta = await productService.delete(id);
  res.json(rta);
  }catch(err){
    next(err);
  }
}

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct
};
