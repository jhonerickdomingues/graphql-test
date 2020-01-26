const User = require('../../models/User');

module.exports = {
    Mutation:{
        createUser: (_, { name, email }) => User.create({ name, email }),
        updateUser: async (_, { id, name, email }) => {
            await User.updateOne({
                _id: id
            }, {
                name,
                email
            })

            return User.findById(id)
        }
    },
};
