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

router.get('/getAllProjects', (async (req, res) => {
    try {
        const projects = await db.getAllProjects(); // Fetch documents using database function
        res.json(projects);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));



module.exports = router;
