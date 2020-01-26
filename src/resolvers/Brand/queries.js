const Brand = require('../../models/Brand');

module.exports = {
    Query:{
        brands: async () => await Brand.find().populate('user'),
        brand: (_, { id }) =>  Brand.findById(id),
    },
};
