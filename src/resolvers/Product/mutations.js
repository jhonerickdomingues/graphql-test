const Product = require('../../models/Product');

module.exports = {
    Mutation:{
        createProduct: (_, { name, price, description, image, category, user, brand }) => Product.create({ name, price, description, image, category, user, brand }),
        updateProduct: async (_, { id, name, price, description, image, category, user, brand }) => {
            await Product.updateOne({
                _id: id
            }, {
                name,
                price,
                description,
                image,
                category,
                user,
                brand
            })

            return Product.findById(id)
        }
    },
};
