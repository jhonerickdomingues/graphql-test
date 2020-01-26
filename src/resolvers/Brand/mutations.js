const Brand = require('../../models/Brand');

module.exports = {
    Mutation:{
        createBrand: async (_, { name, image, user }) => await Brand.create({ name, image, user }),
        updateBrand: async (_, { id, name, image, user }) => {
            await Brand.updateOne({
                _id: id
            }, {
                name,
                image,
                user
            })

            return Brand.findById(id)
        }
    },
};
