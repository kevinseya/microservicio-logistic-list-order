const Order = require('../models/order');

const resolvers = {
    Query: {
        getOrders: async () => {
            try {
                const orders = await Order.findAll();
                return orders;
            } catch (error) {
                throw new Error('Error fetching orders');
            }
        },
    },
};

module.exports = resolvers;
