const router = require('express').Router()
const Testimonial = require('../models/testimonial.model')

router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find({})
        res.send(testimonials)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const testimonial = new Testimonial(req.body)
        await testimonial.save()
        res.send(testimonial)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const testimonial = await Testimonial.findByIdAndDelete(id)
        if (!testimonial) {
            return res.status(404).send()
        }
        res.send(testimonial)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})


module.exports = router