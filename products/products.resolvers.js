const productsModel = require('../products/products.model');

module.exports = {
    Query:{
        products: () => {
            return productsModel.getAllProducts();
        },
        productsByPrice: (_,args) => {
            return productsModel.getProductsByPrice(args.min,args.max);
        } 
    }
}