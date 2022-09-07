const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    email : {
        type: String,
        unique: true,
        require: true
    },

    password : {
        type: String,
        require: true,
        trim: true,
        minLength: 5,
    },

    nickname: {
        type: String,
        require: true,
        minLength: 3
    },

    token : {
        type: String
    },

    refreshToken : {
        type: String
    },

    createdAt : {
        type: Date,
        default: Date.now
    },

    isAuth : {
        type: Number
    }
})

// Encrypt user's password
userSchema.pre('save', function (next) {
    let user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = async function(planePassword, cb){
    let user = this;

    await bcrypt.compare(planePassword, user.password, function(err, isMatch) {
        if(err){return err};
        return cb(null, isMatch);
    })
}

userSchema.methods.generateToken = async function(cb){
    let user = this;

    const token = await jwt.sign(user._id.toHexString(), "secretToken");
    user.token = token;

    await user.save(function(err, user){
        if(err){return cb(err)}
        cb(null, user)
    })
}

userSchema.statics.findByToken = async function(token, cb){
    let user = this;

    await jwt.verify(token, "secretToken", async function(err, decodedId) {
        await user.findOne({"_id" : decodedId, "token": token}, function(err, userInfo){
            if(err) {return err};
            cb(null, userInfo);
        })
    });
}

const UserModel = mongoose.model('User', userSchema)
module.exports = { UserModel }