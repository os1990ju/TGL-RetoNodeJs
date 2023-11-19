const {faker} = require('@faker-js/faker');
const Boom  = require('@hapi/boom');
class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate(){
    const limit = 10;

    for (let index = 0; index < limit; index++) {
        this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url(),
      });
    }
  }

  async findAll(){

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.products)
      },5000)
    })
  }
  async findOne(id){
    const item = this.products.filter(item => item.id === id);
    if(!item){
      throw Boom.notFound('product not found');
    }
    return item;
  }

  async create(body){
    const newProduct = {
      id: faker.string.uuid(),
      ...body
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw Boom.notFound('product not found');
    }
    const product = this.products[index];

    this.products[index]={...product,...changes};
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);

    if(index === -1){
      throw Boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return {id}
  }

}

module.exports = ProductService;
