const User = require('./User');
const Category = require('./Category');

module.exports = {
    Query:{
        ...User.Query,
        ...Category.Query,
    },

    Mutation:{
        ...User.Mutation,
        ...Category.Mutation,
    }
};
