const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
	name: String,
	category: [String],
	ingredients: String,
	directions: String
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
