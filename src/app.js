require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

require('./dbconfig.js');

const server = new ApolloServer({
	cors: true,
	typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Cookbook server ready at ${url}`);
});
