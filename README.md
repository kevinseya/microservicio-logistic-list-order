# microservicio-logistic-list-order
# GraphQL API for Order Management

This project is a GraphQL API built with Node.js and Express that allows managing orders within a logistics system. It supports basic operations such as querying orders, and it’s designed to be a part of a microservices architecture.

## Project Structure

- **`app.js`**: The main entry point of the application, setting up Express and GraphQL middleware.
- **`src/config/dbConfig.js`**: Contains the database configuration settings.
- **`src/controllers/orderController.js`**: Handles business logic related to orders.
- **`src/graphql/resolvers.js`**: Implements GraphQL resolvers for handling queries and mutations.
- **`src/graphql/typeDefs.js`**: Defines the GraphQL schema (types, queries, and mutations).
- **`src/models/order.js`**: Defines the data model for orders using a schema.

## Requirements

- **Node.js** v14 or higher.
- **npm** (Node Package Manager).

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kevinseya/microservicio-logistic-list-order.git
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the application**:

    ```bash
    npm start
    ```

4. The application runs on: `http://localhost:3000`.

## Using the API

### 1. Query Orders

Fetch all orders stored in the database. You can query information such as the order ID, sender’s name, receiver’s name, package details, shipping address, and status.

Example GraphQL query:
```graphql
query {
  getOrders {
    orderId
    senderName
    receiverName
    packageDetails
    shippingAddress
    status
  }
}
 ```
## Additional Information

  - GraphiQL Interface: You can access the interactive GraphQL interface at http://localhost:3000/graphql to test queries and mutations directly from your browser.
  - Database Configuration: Make sure to set up your database connection in the src/config/dbConfig.js file before running the project.
