const Product = require('../../models/Product');

module.exports = {
    Query:{
        products: async () => await Product.find().populate(['user', 'brand', 'category']),
        product: (_, { id }) =>  Product.findById(id),
    },
};
