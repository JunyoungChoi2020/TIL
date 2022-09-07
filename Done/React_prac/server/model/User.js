const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const secretkey = require("../config/secretkey").secretkey;
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    refreshToken: {
        type: String
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

userSchema.methods.comparePassword = function(planePassword, cb){
    let user = this;
    bcrypt.compare(planePassword, user.password, function(err, isMatch){
        if(err){ return err }
        return cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    let user = this;

    let token = jwt.sign(user._id.toHexString(), 'secretKey')
    user.token = token;

    user.save(function(err, user) {
        if(err){
            return cb(err)
        }
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    jwt.verify(token, secretkey, function(err, decodedId){
        User.findOne({'_id': decodedId, 'token': token}, function(err, userInfo){
            if(err){return err};
            return cb(null, userInfo)
        })
    })
}
const User = mongoose.model('User', userSchema)

module.exports = { User }