const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String]
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: [String]
    }
});

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
