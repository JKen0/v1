const { MongoClient, ServerApiVersion } = require('mongodb');

let client = null;

async function connect() {
    client = new MongoClient(process.env.MONGODB_URI_ACA, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();
}

async function disconnect() {
    await client.close();
}

async function getClient() {
    if (client != null) return client;

    await connect(); // Establish connection if no connection made
    return client;
}

module.exports = {
    connect,
    disconnect,
    getClient
};