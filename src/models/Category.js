const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    icon: String
});

module.exports = mongoose.model('category', CategorySchema);
