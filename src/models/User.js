const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    category: [{type: mongoose.Schema.Types.ObjectId, ref: 'category'}],
    brand: [{type: mongoose.Schema.Types.ObjectId, ref: 'brand'}],
    product: [{type: mongoose.Schema.Types.ObjectId, ref: 'product'}]
});

module.exports = mongoose.model('user', UserSchema);
