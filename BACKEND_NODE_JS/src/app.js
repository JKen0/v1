const express = require('express'); // Express web server framework
const cors = require('cors');
require('dotenv').config();
const academicsRouter = require('./routes/academics');
const spotifyRouter = require('./routes/spotify');

var app = express();

app.use(express.static(__dirname + '/public'))
    .use(cors());

app.use('/academics', academicsRouter);
app.use('/spotify', spotifyRouter);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});