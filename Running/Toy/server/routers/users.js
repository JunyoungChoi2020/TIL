const express = require('express');
const app = express();
const { User } = require('../schemas/User');
// const { Movie } = require('../schemas/Movie');
const router = express.Router();
const cookieParser = require('cookie-parser');
const { auth } = require('../middleware/auth');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

// get every users' "User" model
router.get('/getUsers', async (req, res, next) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch(err){
            next(err);
        }
    })

// register
router.post('/register', async (req, res, next) => {
        try {
            const user = await User.create({
                email : req.body.email,
                password: req.body.password,
                nickname: req.body.nickname
            })
            res.status(201).json(user);
        } catch(err){
            next(err);
        }
    })

// login
router.post('/login', async(req, res, next) => {
    try {
        // find user's info
        await User.findOne({email : req.body.email}, function(err, userInfo) {
            if(!userInfo){return "There is no user that you signed in"};
            // compare password
            userInfo.comparePassword(req.body.password, function(err, isMatch) {
                if(!isMatch){return "Wrong password"};
                // generate token and store in my DB
                userInfo.generateToken(function(err, user){
                    if(err){return res.status(400).send(err)}
                    // store token in the client's cookie
                    res.cookie('tokenForClient', user.token).status(200).json({
                        success: true,
                        userId: user._id
                    })
                })
            })
        })
    } catch(err){
        next(err);
    }
})

// give auth to frontend
router.get('/auth', auth, async (req, res, next) => {
    try{
        res.status(200).json({
        name: req.body.name,
        email: req.body.email,
        isAuth: req.body.isAuth,
        nickname: req.body.nickname,
        movies: req.body.movies
    });
    } catch(err) {
        return next(err);
    }
})

// logout, eliminate user's token in the server
router.get('/logout', auth, async (req, res, next) => {
    try{
        User.findOneAndUpdate({'_id' : req.body._id}, {'token' : ""}, (err, cb) => {
            if(err){return err}
            res.status(200).send("Logout succeed")
        })
    } catch(err) {
        return next(err);
    }
})

module.exports = router