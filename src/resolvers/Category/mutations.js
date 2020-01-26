const Category = require('../../models/Category');

module.exports = {
    Mutation:{
        createCategory: (_, { name, user, icon }) => Category.create({ name, user, icon }),
        updateCategory: async (_, { id, name, user, icon }) => {
            await Category.updateOne({
                _id: id
            }, {
                name,
                user,
                icon
            })

            return Category.findById(id)
        }
    },
};
