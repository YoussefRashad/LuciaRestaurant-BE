
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    zip:{
        type: String,
        required: true,
        trim: true
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }],
    avatar:{
        type: String,
        required: true
    }
},{
    timestamps: true
})


// seat reservation
userSchema.virtual('NumberOfSeats',{
    ref:'SeatReservation',
    localField: '_id',
    foreignField: 'owner'
})


// to hide info
userSchema.methods.toJSON = function(){
    const user = this
    const userObj = user.toObject()

    delete userObj.password
    delete userObj.tokens
    delete userObj.city
    delete userObj.state
    delete userObj.zip
    delete userObj.__v
    delete userObj.updatedAt
    delete userObj.createdAt
    
    return userObj
}


// instance methods
userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, 'thisIsASignatureText')
    user.tokens = [...user.tokens, {token}]

    await user.save()
    return token
}


// general model methods
userSchema.statics.findByCredentials = async (email, pass)=>{
    const user = await userModel.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(pass, user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user
}


// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


const userModel = mongoose.model('User', userSchema)

module.exports = userModel