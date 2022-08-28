const express = require("express")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const { users } = require('./models/users')
const bodyparser = require('body-parser')
const hid = require('./config/dev')

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

mongoose.connect(hid.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("hello world! ");
})

app.post('/register', (req, res) => {
    const user = new users(req.body);

    user.save((err, doc) => {
        if(err) throw res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))