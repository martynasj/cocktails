const express = require('express');
const router = express.Router();
const CocktailsController = require('../controllers/CocktailsController');
const uuid = require('uuid');

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

router.post('/cocktails', upload.array('cocktail-images'), function(req, res, next) {
  const files = req.files;
  const cocktail = req.body;
  console.log(cocktail);
  console.log(files);
  for (file of files) {
    //cocktail.images.push(file.des)
  }
  //CocktailsController.addCocktail( cocktail, (result) => {
  //  res.json(result);
  //});
});

router.get('/cocktails/:id', function(req, res, next) {
  const cocktailID = req.params.id;
  CocktailsController.getById( cocktailID, (result) => {
    res.json(result);
  });
});

module.exports = router;