const express = require('express');
const router = express.Router();
const db = require('../db/spotify');
const { checkAccessToken } = require('../utils/spotify');

router.get('/getMusicData', (async (req, res) => {
    try {
        const getToken = await db.getSpotifyToken(); // Fetch documents using database function
        console.log('getToken', getToken);

        const checkToken = await checkAccessToken(getToken);
        console.log('checkToken', checkToken);

        res.json(checkToken);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));


module.exports = router;
