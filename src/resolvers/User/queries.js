const User = require('../../models/User');

module.exports = {
    Query:{
        users: async () => await User.find().populate('category'),
        user: (_, { id }) => User.findById(id),
    },
};
