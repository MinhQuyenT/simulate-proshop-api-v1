const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Load Schema & Resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();