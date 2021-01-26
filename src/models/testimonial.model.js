

const mongoose = require('mongoose')

const testimonialSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    comment:{
        type: String,
        required: true,
        trim: true
    },
    rate:{
        type: Number,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

const testimonialModel = new mongoose.model('Testimonial', testimonialSchema)

module.exports = testimonialModel