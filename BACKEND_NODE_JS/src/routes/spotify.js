const express = require('express');
const router = express.Router();
const db = require('../db/spotify');
const { checkAccessToken, getSpotifyData, } = require('../utils/spotify');

// Define valid time range options
const validTimeRanges = ['short_term', 'medium_term', 'long_term'];

router.get('/getMusicData', (async (req, res) => {
    try {
        const { songsTimeRange, artistTimeRange } = req.query;

        if (songsTimeRange && !validTimeRanges.includes(songsTimeRange) || artistTimeRange && !validTimeRanges.includes(artistTimeRange)) {
            return res.json(400).json({ error: 'Invalid Time Range query parameter' });
        }

        const getToken = await db.getSpotifyToken(); // Fetch documents using database function
        const checkToken = await checkAccessToken(getToken);

        const getData = await getSpotifyData(checkToken, { songsTimeRange: songsTimeRange, artistTimeRange: artistTimeRange })

        res.json(getData);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));


module.exports = router;
