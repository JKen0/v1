const { getClient } = require('./database');

const dbName = 'spotify_';


async function getSpotifyToken() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("tokens");
    return await collection.findOne({});
};

async function updateSpotifyToken(tokenData) {
    const client = await getClient();
    const collection = await client.db(dbName).collection("tokens");

    return await collection.updateOne(
        { _id: tokenData._id },
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