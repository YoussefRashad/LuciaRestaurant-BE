
const mongoose = require('mongoose')

const menuListSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        validate(val){
            if (!['beef', 'chicken', 'dessert', 'juices', 'appetizers', 'extra'].includes(val.toLowerCase())){
                throw new Error('the category that you are selected is not available')
            }
        }
    },
    noOfItems:{
        type: Number,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    components:[String],
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    bestMenuItem:{
        type: Boolean,
        default: false
    }
});

const menuListModel = new mongoose.model('MenuList', menuListSchema)

module.exports = menuListModel