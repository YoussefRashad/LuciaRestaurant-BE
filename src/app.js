
const express = require('express')
require('./DB/connection')
const cors = require('cors')
const app = express()

const userRouter = require('./routers/user.router')
const contactRouter = require('./routers/contact.router')
const seatRouter = require('./routers/seatReservation.router')
const menuListRouter = require('./routers/menuList.router')
const homeImagesRouter = require('./routers/homeImages')
const testimonialRouter = require('./routers/testimonial.router')

app.use(express.json())

const FE_URL = require('./utils/URL').FE_URL
// Access Api
// https://lucia-restaurant.netlify.app/
// origin:['http://localhost:3000','http://127.0.0.1:3000'],
app.use(cors({
    origin: [FE_URL,FE_URL],
    credentials:true
}));
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', FE_URL);
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.use('/users', userRouter)
app.use('/contactUS', contactRouter)
app.use('/seat-reservation', seatRouter)
app.use('/menuList', menuListRouter)
app.use('/homeImages', homeImagesRouter)
app.use('/testimnial', testimonialRouter)


const PORT = process.env.PORT || 3500
app.listen(PORT, ()=>console.log(`server is up on port ${PORT}`))