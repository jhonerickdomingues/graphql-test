const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
});

module.exports = mongoose.model('user', UserSchema);
