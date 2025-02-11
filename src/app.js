const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/dbConfig'); 
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { graphqlHTTP } = require('express-graphql');



const app = express();

// Middleware setup
app.use(bodyParser.json());

// Configuration de GraphQL
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true, // Activate the test interface GraphiQL
}));

// Start server
const PORT = process.env.PORT || 7005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Synchronize models with the database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized successfully.');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });