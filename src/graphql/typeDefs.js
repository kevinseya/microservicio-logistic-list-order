const { gql } = require('graphql-tag'); 

const typeDefs = gql`
    type Order {
        orderId: ID!
        idCustomer: ID!
        senderName: String!
        receiverName: String!
        receiverPhone: String!
        packageDetails: String
        shippingAddress: String!
        deliveryAddress: String!
        price: Float!
        status: String!
        active: Boolean!
    }

    type Query {
        getOrders: [Order]
    }
`;

module.exports = typeDefs;
