
const { get, post } = require('./axios');
const { updateSpotifyToken } = require('../db/spotify');
const { isTokenExpired } = require('../utils/date');


// Define valid time range options
const validTimeRanges = ['short_term', 'medium_term', 'long_term'];

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

async function getSpotifyData(tokenData, parameters) {
    const result = { previousSongs: [], topSongs: [], topArtists: [] }
    const songsTimeRange = parameters.songsTimeRange ? parameters.songsTimeRange : "medium_term";
    const artistTimeRange = parameters.artistTimeRange ? parameters.artistTimeRange : "medium_term";

    const getCallConfig = {
        headers: {
            Authorization: `Bearer ${tokenData.access_token}`
        }
    }

    const getPreviousSongPlayed = await get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`, getCallConfig);
    const getTopSongs = await get(`https://api.spotify.com/v1/me/top/tracks?time_range=${songsTimeRange}&limit=10`, getCallConfig);
    const getTopArtists = await get(`https://api.spotify.com/v1/me/top/artists?time_range=${artistTimeRange}&limit=5`, getCallConfig);

    getPreviousSongPlayed.items.map((item) => {
        result.previousSongs.push({
            name: item.track.name,
            timePlayed: item.played_at,
            linkSpotify: item.track.external_urls.spotify,
            linkPreview: item.track.preview_url,
            artists: item.track.artists.map(artist => artist.name).join(', '),
            albumPic: item.track.album.images[0].url
        });
    });

    getTopSongs.items.map((item) => {
        result.topSongs.push({
            name: item.name,
            linkSpotify: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name).join(', '),
            artistPic: item.album.images[0].url
        });
    });

    getTopArtists.items.map((item) => {
        result.topArtists.push({
            name: item.name,
            linkSpotify: item.external_urls.spotify,
            artistPic: item.images[0].url
        });
    });

    // Convert the object to JSON format
    return result;
}



module.exports = { refreshAccessToken, checkAccessToken, getSpotifyData };