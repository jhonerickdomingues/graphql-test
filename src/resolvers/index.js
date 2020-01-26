const User = require('./User');
const Category = require('./Category');
const Brand = require('./Brand');
const Product = require('./Product');

module.exports = {
    Query:{
        ...User.Query,
        ...Category.Query,
        ...Brand.Query,
        ...Product.Query,
    },

    Mutation:{
        ...User.Mutation,
        ...Category.Mutation,
        ...Brand.Mutation,
        ...Product.Mutation,
    }
};
