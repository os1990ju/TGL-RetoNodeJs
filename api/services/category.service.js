const { faker } = require('@faker-js/faker');
const Boom = require('@hapi/boom');

class CategoryService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  async generate() {
    const limit = 10;

    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        description: faker.lorem.sentence(),
      });
    }
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 5000);
    });
  }

  async findOne(id) {
    const item = this.categories.find((item) => item.id === id);
    if (!item) {
      throw Boom.notFound('category not found');
    }
    return item;
  }

  async create(body) {
    const newCategory = {
      id: faker.string.uuid(),
      ...body,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw Boom.notFound('category not found');
    }
    const category = this.categories[index];
    this.categories[index] = { ...category, ...changes };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw Boom.notFound('category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoryService;
