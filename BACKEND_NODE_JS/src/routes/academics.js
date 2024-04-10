const express = require('express');
const router = express.Router();
const db = require('../db/academics');

router.get('/getAllGrades', (async (req, res) => {
    try {
        const grades = await db.getAllGrades(); // Fetch documents using database function
        res.json(grades);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));


module.exports = router;
