const express = require('express');
const router = express.Router();
const CocktailsController = require('../controllers/CocktailsController');
const uuid = require('uuid');
const config = require('../serverConfig');

const upload = require('../config/multer');


/**
 * query parameters - ingredients: array
 * /cocktails?ingredients=rum&ingredients=coke
 */
router.get('/cocktails', function(req, res, next) {

  CocktailsController.getAll(req.query, function(result) {
    res.json(result);
  });

});

router.post('/cocktails/images', upload.any(), function(req, res, next) {
  const images = req.files;
  const urls = [];
  for (let image of images) {
    const url = config.imageStorageUrl + image.path.replace(/static/, '');
    urls.push(url)
  }
  res.json( {urls} );
});

router.get('/cocktails/:id', function(req, res, next) {
  const cocktailID = req.params.id;
  CocktailsController.getById( cocktailID, (result) => {
    res.json(result);
  });
});

module.exports = router;