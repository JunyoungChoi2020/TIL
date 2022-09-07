const express = require("express")
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')

const connect = require('./schemas')
connect();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

// const indexRouter = require('./routes')
const userRouter = require('./routes/users')
const commentRouter = require('./routes/comments')

// app.use('/index', indexRouter)
app.use('/user', userRouter)
app.use('/comment', commentRouter)

app.listen(port, () => console.log(`app listening on port ${port}!`))
