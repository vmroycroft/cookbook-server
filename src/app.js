require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

require('./dbconfig.js');

const server = new ApolloServer({
	typeDefs,
  resolvers
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () => console.log(`Cookbook server ready at ${server.graphqlPath}`));
