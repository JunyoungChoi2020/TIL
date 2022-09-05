const express = require('express')
const User = require('../schemas/user')
const Comment = require('../schemas/comment')
const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const user = await User.find({});
            res.json(user)
        } catch(err) {
            console.log(err)
            next(err);
        }
    })

    .post(async (req, res, next) => {
        try {
            const user = await User.create({
                name: req.body.name,
                age: req.body.age,
                married: req.body.married
            });

            res.status(201).json(user)
        } catch (err){
            console.log(err)
            next(err);
        }
    })

