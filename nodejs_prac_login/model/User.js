const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: 1,
        unique: 1
    },
    password: {
        type: String,
        minlength: 4
    },
    role: {
        type:Number,
        default: 0
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }