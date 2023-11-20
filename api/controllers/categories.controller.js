const CategoryService = require('../services/category.service');
const categoryService = new CategoryService();

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.findAll();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
}

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await categoryService.findOne(id);
    res.status(200).json({
      category
    });
  } catch (error) {
    next(error);
  }
}

const createCategory = async (req, res) => {
  const body = req.body;
  const newCategory = await categoryService.create(body);
  res.status(201).json({
    message: 'Category created',
    data: {
      newCategory
    }
  });
}

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await categoryService.update(id, body);
    res.json(category);
  } catch (err) {
    next(err);
  }
}

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await categoryService.delete(id);
    res.json(response);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
