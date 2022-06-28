const mongoose = require("mongoose");
const celebritySchema = new mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    cast: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Celebrity",
    }]
});

const Movie = mongoose.model("Movie", celebritySchema)
module.exports = Movie;
