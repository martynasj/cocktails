/**
 * Created by martynasjankauskas on 09/04/16.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
  // Setting lowercase on string, runs a function that converts the string to lowercase
  name: { type: String, required: true, lowercase: true },
  images: { type: [String], default: [] },
  alcohol: [{
    _id: false,
    name: { type: String, lowercase: true, required: true },
    amount: { type: Number, required: true }
  }],
  other: [{
    _id: false,
    name: { type: String, lowercase: true },
    amount: { type: Schema.Types.Mixed }
  }],
  garnish: [{ type: String, lowercase: true }],
  preparation: [{ type: String, lowercase: true, required: true }],
  glassType: { type: String, lowercase: true, required: true },
  description: { type: String, default: '' }
});

/**
 * First param can be either plural or singular, case insensitive
 */
const Cocktail = mongoose.model('cocktail', cocktailSchema);

module.exports = Cocktail;