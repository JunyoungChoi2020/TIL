const express = require('express')
const app = express()
const port = 5000
const hidden = require('./config/dev')
const mongoose = require('mongoose')

mongoose.connect(hidden.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then (() => console.log("MongoDB connected...")).catch(err => console.log(err))



app.listen(port, () => console.log(`app listening on port ${port}!`))
