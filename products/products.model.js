const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },
    {
        id:'bluejean',
        description: 'Blue Jeans',
        price: 55.55,
        reviews: []
    }
]

function getAllProducts(){
    return products;
}

function addNewProduct(id,description,price){
    const newProduct = 
        {
            id: id,
            description: description,
            price:price,
            reviews: []
        }
    products.push(newProduct)
    return newProduct
}

function getProductById(id){
    return products.find((product)=>{return product.id==id});
}

function getProductsByPrice(min,max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

function addNewProductReview(id,rating,comment){
    const newReview = {
        rating: rating,
        comment: comment
    }
    const product = getProductById(id);
    if(product){
        product.reviews.push(newReview)
        return product
    }

}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}