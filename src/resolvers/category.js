const union = require('lodash/union');

const { Recipe } = require('../models');

module.exports = {
	Query: {
		categories: async (_) => {
			const recipes = await Recipe.find();
			return union(recipes.map((recipe) => recipe.category).flat()).map((category) => ({name: category}));
		}
	}
};
