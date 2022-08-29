const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minLength: 5
    },
    lastname: {
        type: String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next) {
    var user = this; // 꼭 필요!!!!

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                return next(err)
            } else {
                bcrypt.hash(user.password, salt, function (err, hash) {
                    if (err){
                        return next(err);
                    } else {
                        user.password = hash;
                        next();
                    }
                })
            };
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(planePassword, cb) {
    let user = this;
    bcrypt.compare(planePassword, user.password, function(err, isMatch) {
        if(err){
            return cb(err)
        }
        return cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    let user = this;
    let token = jwt.sign(user._id.toHexString(), 'secretToken')

    user.token = token;
    user.save(function(err, user) {
        if(err){
            return cb(err)
        }
        cb(null, user)
    })

}

userSchema.statics.findByToken = function(token, cb) {
    let user = this
    jwt.verify(token, 'secretToken', function(err, decodedId) {
        user.findOne({"_id": decodedId, "token": token}, function(err, userInfo) {
            if(err){
                return cb(err);
            } else {
                cb(null, userInfo)
            }
        })
    })
}
const users = mongoose.model('users', userSchema)

module.exports = {users}
