const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('./recipes/recipe-router');
const IngredientRouter = require('./ingredients/ingredient-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

server.get('/', (req, res) => {
    res.send('Server is running')
})

module.exports = server;