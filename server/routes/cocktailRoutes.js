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

// Route is used for uploading just images to the server
// Response is [imageUrl]
router.post('/cocktails/images', upload.any(), function(req, res, next) {
  const images = req.files;
  const urls = [];
  for (let image of images) {
    const url = config.imageStorageUrl + image.path.replace(/static/, '');
    urls.push(url)
  }
  res.json( {urls} );
});

router.post('/cocktails', (req, res) => {
  CocktailsController.addCocktail(req.body, result => {
    res.json(result)
  })
});

router.get('/cocktails/:id', function(req, res, next) {
  const cocktailID = req.params.id;
  CocktailsController.getById( cocktailID, (result) => {
    res.json(result);
  });
});

module.exports = router;