const express = require('express'); // Express web server framework
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const academicsRouter = require('./routes/academics');
const spotifyRouter = require('./routes/spotify');
const db = require('./db/database');

var app = express();

app.use(express.static(__dirname + '/public'))
    .use(cors());

app.use('/academics', academicsRouter);
app.use('/spotify', spotifyRouter);

// Connect to MongoDB when the server starts
(async () => {
    try {
        await db.connect(); // Establish connection
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
})();


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});