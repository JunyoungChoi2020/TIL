const express = require("express")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const { users } = require('./models/users')
const hid = require('./config/dev')
const cookieParser = require('cookie-parser')
const { auth } = require('./middleware/auth')

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(hid.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("hello world! ");
})

app.post('/api/users/register', (req, res) => {
    const user = new users(req.body)
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

app.post('/api/users/login', (req, res) => {
    users.findOne({email: req.body.email}, (err, userInfo) => {
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

app.get('api/users/auth', auth, (req, res) => {
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

app.get('/api/users/logout', auth, (req, res) => {
    users.findOneAndUpdate({_id: req.user._id}, {token:""}, (err, user) => {
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`))