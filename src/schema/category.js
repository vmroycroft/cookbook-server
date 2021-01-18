const { gql } = require('apollo-server-express');

const schemas = gql`
	extend type Query {
		"""
		Returns all categories.
		"""
		categories: [Category]
	}

	type Category {
		name: String!
	}
`;

module.exports = schemas;
