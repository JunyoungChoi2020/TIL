const express = require("express")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const { User } = require('./model/User')
const hidden = require('./config/dev')
const cookieParser = require('cookie-parser')
const { auth } = require('./middleware/auth')

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(hidden.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then (() => console.log("MongoDB connected...")).catch(err => console.log(err))

app.post('/api/user/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, doc) => {
        if (err) {
            return res.json({success: false, err})
        } else {
            return res.status(200).json({
                success: true
            })
        }
    })
})

app.post('/api/user/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, userInfo) => {
        if(!userInfo) {
            return res.json({
                loginSuccess: false,
                message: "No user"
            })
        }

        userInfo.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch){
                return res.json({
                    loginSuccess: false,
                    message: "Wrong password"
                })
            }

            userInfo.generateToken((err, user) => {
                if(err){
                    return res.status(400).send(err);
                }
                res.cookie("x_auth", user.token).status(200).json({
                    loginSuccess: true,
                    userId: user._id
                })
            })
        })
    })
})

app.get('/api/user/auth', auth, (req, res) => {
     res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0? false : true,
        isAuth: 1,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})


app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate({'_id':req.user._id}, {'token': ""}, (err, cb) => {
        if(err){
            return res.json({
                success: false,
                err
            })
        } else {
            return res.status(200).send({
                success: true
            })
        }
    })
})


app.listen(port, () => console.log(`app listening on port ${port}!`))
