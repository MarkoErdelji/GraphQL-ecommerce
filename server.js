const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { start } = require('repl');

const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'));

async function startApolloServer(){
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs:  typesArray,
        resolvers: resolversArray
    })

    const server = new ApolloServer({
        schema
    })

    await server.start();
    server.applyMiddleware({ app, path: '/graphql'});

    

    app.listen(3000,() => {
        console.log('Running GraphQL server on port 3000...');
    });
}

startApolloServer();