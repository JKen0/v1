const express = require('express');
const router = express.Router();
const db = require('../db/spotify');
const { checkAccessToken, getSpotifyData, } = require('../utils/spotify');

// Define valid time range options
const validTimeRanges = ['short_term', 'medium_term', 'long_term'];

router.get('/getMusicData', (async (req, res) => {
    try {
        const { songsTimeRange, artistTimeRange } = req.query;

        if (artistTimeRange && !validTimeRanges.includes(artistTimeRange) || songsTimeRange && !validTimeRanges.includes(songsTimeRange)) {
            throw { code: 'INVALID_TIME_RANGE', message: 'Invalid time range query parameter' }
        }

        const getToken = await db.getSpotifyToken(); // Fetch documents using database function
        const checkToken = await checkAccessToken(getToken);

        const getData = await getSpotifyData(checkToken, { songsTimeRange: songsTimeRange, artistTimeRange: artistTimeRange })

        res.json(getData);
    } catch (error) {
        // no need to console error invalid parameters
        if (error.code === "INVALID_TIME_RANGE") {
            return res.status(400).json({ error: error.code, message: error.message });
        }

        console.error('Error fetching documents:', error);
        return res.status(500).json({ code: "INTERNAL_ERROR", message: 'Internal Server Error' });
    }
}));


module.exports = router;
