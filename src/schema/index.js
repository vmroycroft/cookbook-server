const { gql } = require('apollo-server');
const recipeSchema = require('./recipe');

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

module.exports = [linkSchema, recipeSchema];
