const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'));
const schema = makeExecutableSchema({
    typeDefs:[typesArray]
})


const root = {
    products: [
        {
            id: 'redshoe',
            description: 'Red Shoe',
            price: 42.12,
        },
        {
            id:'bluejean',
            description: 'Blue Jeans',
            price: 55.55,
        }
    ],
    orders: [
        {
            date: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product:{
                        id: 'redshoe',
                        description: 'Old Red Shoe',
                        price: 45.11
                    },
                    quantity: 2,
                }
            ]
        }
    ]
    
};

const app = express();

app.use('/graphql',graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
}));

app.listen(3000,() => {
    console.log('Running GraphQL server on port 3000...');
});