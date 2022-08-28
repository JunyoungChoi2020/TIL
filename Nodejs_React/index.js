const express = require("express")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const { users } = require('./models/users')
const hid = require('./config/dev')

app.use(express.urlencoded({extended : true}));
app.use(express.json());

mongoose.connect(hid.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("hello world! ");
})

app.post('/register', (req, res) => {
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))