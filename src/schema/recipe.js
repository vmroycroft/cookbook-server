const { gql } = require('apollo-server-express');

const schemas = gql`
	extend type Query {
		"""
		Returns all recipes.
		"""
		recipes: [Recipe]
	}

	extend type Mutation {
		addRecipe(
			name: String!
			author: String!
			category: [String]!
			ingredients: String!
			directions: String!
		): Response
	}

	type Response {
		success: Boolean!
		message: String
		recipe: Recipe
	}

	type Recipe {
		id: ID!
		name: String!
		author: String!
		category: [String]!
		ingredients: String!
		directions: String!
	}
`;

module.exports = schemas;
