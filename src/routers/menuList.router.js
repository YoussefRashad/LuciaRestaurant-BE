const router = require('express').Router()
const MenuList = require('../models/menuList.model')

router.get('/', async (req, res) => {
    try {
        const menuLists = await MenuList.find({})
        res.send(menuLists)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const menuList = await MenuList.findById(req.params.id)
        if(!menuList){
            return res.status(404).send()
        }
        res.send(menuList)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newMenuList = new MenuList(req.body)
        await newMenuList.save()
        res.send(newMenuList)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'category', 'noOfItems', 'price', 'components', 'description', 'image', 'bestMenuItem']
    const isAllowed = updates.every((update)=> allowedUpdates.includes(update))
    if(!isAllowed){
        return res.status(404).send()
    }
    try {
        const menuList = await MenuList.findById(req.params.id)
        if(!menuList){
            return res.status(404).send()
        }
        updates.map(update => menuList[update] = req.body[update])
        await menuList.save()
        res.status(200).send(menuList)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const menuList = await MenuList.findByIdAndDelete(req.params.id)
        if(!menuList){
            return res.status(404).send()
        }
        res.send(menuList)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})



module.exports = router