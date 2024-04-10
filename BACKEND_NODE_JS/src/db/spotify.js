const { getClient } = require('./database');

const dbName = 'spotify_';


async function getSpotifyToken() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("tokens");
    return collection.find({}).toArray();
};


async function updateSpotifyToken() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("tokens");
    return collection.find({}).toArray();
};


module.exports = {
    getSpotifyToken,
    updateSpotifyToken
};