
const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    dateTime:{
        type: Date,
        required: true,
        trim: true
    },
    numberOfSeats:{
        type: Number,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref:'User'
    }
},{
    timestamps: true
})

const seatModel = new mongoose.model('SeatReservation', seatSchema)

module.exports = seatModel