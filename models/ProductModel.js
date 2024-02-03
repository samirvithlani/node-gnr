const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    },
    discount:{
        type: Number,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    status:{
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model('Product', ProductSchema); //Product is collection name in db