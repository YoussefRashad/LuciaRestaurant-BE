

const router = require('express').Router()
const Contact = require('../models/contact.model')


router.post('/', async (req,res)=>{
    const mail = new Contact({...req.body})
    try {
        await mail.save()
        res.send()
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})


module.exports = router