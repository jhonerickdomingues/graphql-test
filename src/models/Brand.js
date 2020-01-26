const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: String,
    image: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('brand', BrandSchema);
