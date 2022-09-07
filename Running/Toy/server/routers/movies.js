const express = require('express');
const {Movie} = require('../schemas/Movie');

const router = express.Router();

// create movie
router.post('/upload', async (req, res, next) => {
    try {
        const movieInfo = await Movie.create({
            userId: req.body._id,
            name: req.body.name,
            uri: req.body.uri,
            thumbnailImagesUri: req.body.thumbnailImagesUri,
            category: req.body.category
        });

        // const result = await Movie.populate(movieInfo, {path: 'userId'});
        res.status(201).json({
            create: "success"
        });
    } catch (err) {
        next(err);
    }
})

// get user's movie list
router.get('/movielist', async(req, res, next) => {
    try{
        const movieInfo = await Movie.find({'userId' : req.body._id});
        res.json(movieInfo);
    } catch(err) {
        next(err);
    }
})

// update movie
router.route('/update')
    .patch(async (req, res, next) => {
        try {
            const movieInfo = Movie.update({
                _id: req.body._id,
                name:
            }, {
                name: req.body.name,
                uri: req.body.uri,
                thumbnailImagesUri: req.body.thumbnailImagesUri,
                category: req.body.category
            });

            res.status(201).json(movieInfo);
        } catch (err) {
            next(err);
        }
    })

    // delete movie
    .delete(async (req, res, next) => {
        try{
            const movieInfo = Movie.deleteOne({
                _id: req.params._id
            });
            res.json(movieInfo);
        } catch(err) {
            next(err);
        }
    })

module.exports = router;