const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

// get all recipes
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

// get ingredients for recipe
router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id)
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

// get instructions for recipe
router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;

    Recipes.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps);
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})


module.exports = router;