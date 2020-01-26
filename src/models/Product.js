const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    brand: {type: mongoose.Schema.Types.ObjectId, ref: 'brand'}
});

module.exports = mongoose.model('product', ProductSchema);
