
const { get, post } = require('./axios');
const { updateSpotifyToken } = require('../db/spotify');
const { isTokenExpired } = require('../utils/date');


async function refreshAccessToken(tokenData) {
    // create headers and parameters
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const postCallConfig = {
        params: {
            grant_type: 'refresh_token',
            refresh_token: tokenData.refresh_token
        },
        headers: {
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        }
    }

    // make refresh call
    const refreshTokenAPI = await post('https://accounts.spotify.com/api/token', null, postCallConfig);

    console.log(refreshTokenAPI);

    // format new token  data
    const newTokens = {
        _id: tokenData._id,
        access_token: refreshTokenAPI.access_token,
        refresh_token: refreshTokenAPI.refresh_token ? refreshTokenAPI.refresh_token : tokenData.refresh_token,
        refresh_date: new Date()
    }

    const updateDB = await updateSpotifyToken(newTokens);

    if (updateDB) return newTokens;
};

async function checkAccessToken(tokenData) {
    if (!isTokenExpired(tokenData.refresh_date)) return tokenData;

    // if expired then refresh access token and return new data
    const newTokenData = refreshAccessToken(tokenData);
    return newTokenData;
};



module.exports = { refreshAccessToken, checkAccessToken };