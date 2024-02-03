const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    name: {
        type: String,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Category', CategorySchema); //Category is collection name in db