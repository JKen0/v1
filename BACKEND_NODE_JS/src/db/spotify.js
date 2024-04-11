const { getClient } = require('./database');

const dbName = 'spotify_';


async function getSpotifyToken() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("tokens");

    return collection.findOne({ _id: Object(process.env.MONGODB_TOKEN_ID) });
};

async function updateSpotifyToken(tokenData) {
    const client = await getClient();
    const collection = await client.db(dbName).collection("tokens");

    return await collection.updateOne(
        { _id: Object(process.env.MONGODB_TOKEN_ID) },
        {
            $set: {
                access_token: tokenData.access_token,
                refresh_token: tokenData.refresh_token,
                refresh_date: tokenData.refresh_date
            }
        }
    );
};

module.exports = {
    getSpotifyToken,
    updateSpotifyToken
};