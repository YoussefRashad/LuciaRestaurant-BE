
const router = require('express').Router()
const User   = require('../models/user.model')
const auth   = require('../controllers/auth')

router.get('/', async (req, res) => { 
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})

router.get('/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    try{
        const user = await User.findById(id)
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }catch(error){
        res.status(500).send({error: error.message})
    }
})

router.post('/login',  async (req, res, next) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        
        res.send({user, token})
        next()
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})

router.post('/signup', async (req, res) => {
    const user = new User({ ...req.body })
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(500).send( error.errmsg )
    }
})

router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => req.token !== token.token)
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

})

router.post('/logoutall', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})


router.patch('/me', auth, async (req, res) =>{
    const updates = Object.keys(req.body)
    const updateAllowed = ['fName', 'lName', 'phone', 'email', 'password', 'city', 'state', 'zip', 'avatar']
    const isAllowed = updates.every(update => updateAllowed.includes(update))
    if(!isAllowed){
        return res.status(404).send()
    }
    try{
        updates.map((update)=> req.user[update] = req.body[update])
        await req.user.save()
        res.status(200).send(req.user)
    }catch(error){
        res.status(500).send({error: error.message})
    }
})

router.delete('/me', auth, async (req, res) =>{
    try {
        await req.user.remove()
        res.status(200).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

module.exports = router