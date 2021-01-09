const { Recipe } = require('../models');

module.exports = {
	Query: {
		recipes: async (_) => await Recipe.find()
	},
	Mutation: {
		addRecipe: async (_, { name, category, ingredients, directions }) => {
			try {
				const doc = await Recipe.create({
					name,
					category,
					ingredients,
					directions
				});

				return {
					success: true,
					message: null,
					recipe: doc
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					recipe: null
				};
			}
		}
	}
};
