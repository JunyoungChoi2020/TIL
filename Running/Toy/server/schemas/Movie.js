const mongoose = require('mongoose')
const { Schema } = mongoose;

const movieSchema = new Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    name: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    uri : {
        type: String
    },

    thumbnailImagesUri : {
        type: String
    },

    category : {
        type: String
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie };
