const { gql } = require('apollo-server-express');
const recipeSchema = require('./recipe');
const categorySchema = require('./category');

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

module.exports = [linkSchema, recipeSchema, categorySchema];
