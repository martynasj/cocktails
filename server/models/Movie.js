/**
 * Created by martynasjankauskas on 09/04/16.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, default: 'Not specified' },
    rating: { type: Number, default: 0 },
    cast: { type: [] }
});

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;