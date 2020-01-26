const Category = require('../../models/Category');

module.exports = {
    Query:{
        categories: async () => await Category.find().populate('user'),
        category: (_, { id }) =>  Category.findById(id),
    },
};
