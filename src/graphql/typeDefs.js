const { gql } = require('graphql-tag'); 

const typeDefs = gql`
    type Order {
        orderId: ID!
        senderName: String!
        receiverName: String!
        packageDetails: String
        shippingAddress: String!
        status: String!
    }

    type Query {
        getOrders: [Order]
    }
`;

module.exports = typeDefs;
