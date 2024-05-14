const express = require('express');
const router = express.Router();
const { get } = require('../utils/axios');

router.get('/getSeasonData/:season?', (async (req, res) => {
    try {
        const season = req.params.season ? req.params.season : "current";

        const seasonData = await get(`http://ergast.com/api/f1/${season}.json`);

        res.json(seasonData);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));


module.exports = router;
