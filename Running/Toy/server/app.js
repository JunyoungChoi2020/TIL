const express = require("express")
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')

const connect = require('./schemas')
connect();

const userRouter = require('./routers/users')
const movieRouter = require('./routers/movies')

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

app.use('/movie', movieRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`))