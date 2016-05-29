const mongojs = require('mongojs');

const db = require('../db');
const cocktails = db.collection('cocktails');

class CocktailsController {

  static getAll(callback) {
    cocktails.find((err, docs) => {
      if (err) {
        throw new Error(err);
      } else {
        callback(docs);
      }
    });
  }

  static getById(id, callback) {
    cocktails.findOne({_id: mongojs.ObjectId(id)}, (err, docs) => {
      if (err) {
        throw new Error(err);
      } else {
        callback(docs);
      }
    })
  }

  static getAllEpisodes(id, callback) {
    tv.aggregate([
      {$match: {_id: mongojs.ObjectID(id)}},
      {$unwind: "$_embedded.episodes"},
      {$project: {episode: "$_embedded.episodes", _id: 0}}
    ], (err, docs) => {
      if (err) throw new Error(err);
      callback(docs);
    });
  }

  static getEpisodeById(id, episodeId, callback) {
    tv.aggregate([
        {$unwind: "$_embedded.episodes"},
        // give a different name to _embedded.episodes
        {$project: {episode: "$_embedded.episodes", _id: 0}},
        {$match: {"episode.id": parseInt(episodeId)}}
      ], (err, docs) => {
        if (err) throw new Error(err);
        callback(docs);
      }
    );
  }

  static addTvSeries(tvSeries, callback) {
    tv.save(tvSeries, (err, document) => {
      if (err) throw new Error(err);
      callback(document);
    })
  }

}

module.exports = CocktailsController;