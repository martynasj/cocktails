const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const CocktailsController = require('../controllers/CocktailsController');


/**
 * query parameters - ingredients: array
 * /cocktails?ingredients=rum&ingredients=coke
 */
router.get('/cocktails', function(req, res, next) {

  const ingredients = [];
  //if (req.query.ingredients) {
  //  if (req.query.ingredients)
  //}

  CocktailsController.getAll(ingredients, function(result) {
    res.json(result);
  });

});

router.post('/cocktails', function(req, res, next) {
  CocktailsController.addCocktail( req.body, (result) => {
    res.json(result);
  });
});

router.post('/image', upload.array('cocktail-images'), (req, res, next) => {
  console.log(req.files);
  res.json(Object.assign({status: 'all good'}, req.files, req.body));
});

router.get('/cocktails/:id', function(req, res, next) {
  const cocktailID = req.params.id;
  CocktailsController.getById( cocktailID, (result) => {
    res.json(result);
  });
});

module.exports = router;