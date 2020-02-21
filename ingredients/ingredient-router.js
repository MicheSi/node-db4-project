const express = require('express');

const Ingredients = require('./ingredient-model');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.status(200).json(ingredients)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get('/:id/recipes', (req, res) => {
    const id = req.params.id;

    Ingredients.getIngredientRecipes(id)
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})


module.exports = router;