const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers  = require('./resolvers');
const mongoose = require('mongoose');
const schemas = require('./schemas');

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
    useNewUrlParser: true,
});

const server = new GraphQLServer({
    typeDefs: schemas,
    resolvers
});

server.start();
