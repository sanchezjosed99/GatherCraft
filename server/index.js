// Import necessary modules from Apollo and PostgreSQL
const { ApolloServer, gql } = require('apollo-server');
const { Pool } = require('pg');
const { PubSub } = require('graphql-subscriptions');


// Create a new instance of PubSub for handling subscriptions
const pubsub = new PubSub();

// This is the event name for our subscription
const MESSAGE_POSTED = 'MESSAGE_POSTED';

// Connect to your PostgreSQL database
const pool = new Pool({
    user: 'your_game_user',
    host: 'localhost',
    database: 'your_game_db',
    password: 'password',
    port: 5432,
});

// Define your GraphQL schema using the gql template literal
const typeDefs = gql`
type Query {
    messages: [Message]  # Get a list of messages
}
type Message {
    id: ID!
    text: String
    timestamp: String
    user: User
}
type User {
    id: ID!
    username: String
}
type Mutation {
    postMessage(text: String!, userId: ID!): Message  # Mutation to post a message
}
type Subscription {
    messagePosted: Message  # Subscription to get notified of new messages
}
`;

// Define the resolvers for your schema
const resolvers = {
    Query: {
        messages: async () => {
            // Retrieve messages from the database
            const res = await pool.query('SELECT * FROM Messages JOIN Users ON Messages.user_id = Users.id');
            return res.rows.map(row => ({
                ...row,
                user: {
                    id: row.user_id,
                    username: row.username
                }
            }));
        },
    },
    Mutation: {
        postMessage: async (_, { text, userId }) => {
            // Insert a new message into the database
            const res = await pool.query('INSERT INTO Messages (text, user_id) VALUES ($1, $2) RETURNING *', [text, userId]);
            const message = res.rows[0];
            // Publish the new message event
            pubsub.publish(MESSAGE_POSTED, { messagePosted: message });
            return message;
        }
    },
    Subscription: {
        messagePosted: {
            // Set up the subscription to listen for new messages
            subscribe: () => pubsub.asyncIterator(MESSAGE_POSTED)
        }
    }
};

// Create an instance of ApolloServer with your type definitions and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
