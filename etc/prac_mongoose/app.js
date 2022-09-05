const express = require("express")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')

const { User } = require('./schemas/user')
const  Comment  = require('./schemas/comment')
const router = express.Router();

const connect = require('./schemas')
connect();

const indexRouter = require('./routes')
const userRouter = require('./routes/users')
const commentRouter = require('./routes/comments')

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => console.log(`app listening on port ${port}!`))
