
const router = require('express').Router()
const auth = require('../controllers/auth')
const seatModel = require('../models/seatReservation.model')

router.post('/', auth, async (req, res)=>{
    const Seat = new seatModel({...req.body, owner: req.user._id})
    try {
        await Seat.save()
        res.send()
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})

module.exports = router