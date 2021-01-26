
const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error('Invalid Email')
            }
        }
    },
    subject:{
        type: String,
        required: true,
        trim: true
    },
    message:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

const contactModel = new mongoose.model('Contact', contactSchema)

module.exports = contactModel