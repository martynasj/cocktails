const express = require('express');
const router = express.Router();
const CocktailsController = require('../controllers/CocktailsController');

router.get('/cocktails', function(req, res, next) {
  CocktailsController.getAll(function(result) {
    res.json(result);
  });
});

router.get('/cocktails/:id', function(req, res, next) {
  const cocktailID = req.params.id;
  CocktailsController.getById( cocktailID, (result) => {
    res.json(result);
  });
});

module.exports = router;