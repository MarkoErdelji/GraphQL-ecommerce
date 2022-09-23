const productsModel = require('../products/products.model');

module.exports = {
    Query:{
        products: () => {
            return productsModel.getAllProducts();
        }
    }
}