// Adding Required Dependencies
const express = require("express");
const path = require('path');
const db = require('./config/db')

// GraphQL declarations
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const server = new ApolloServer({
  typeDefs, 
  resolvers
});


const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
server.applyMiddleware({ app });


// routes
app.get("/", (req, res) => res.send("API Running"));
app.get("/schedule", (req, res) => res.send("API Running"));
app.get("/comment", (req, res) => res.send("API Running"));
// TODO: add more routes as we need them here

// if we're in production, define the folder that will be used for static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});