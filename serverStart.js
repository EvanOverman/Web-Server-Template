// https://github.com/EvanOverman/Web-Server-Template

express = require('express');
path = require('path');

app = express();

app.get('/', (req, res) => {

    // You can put any html code in here, just a simple string, or even a file.

    res.sendFile(path.join(__dirname + '/pages/index.html'));

    console.log('Got request for / ');

});

app.get('/stylesheet.css', (req, res) => {

    // To make the style sheet accessable by the index.html file, we must put its path here.

    res.sendFile(path.join(__dirname + '/pages/stylesheet.css'));

    console.log('Got request for /stylesheet.css ... ');

});

// Set 3000 to whatever port you would like it to be hosted on.
app.listen(3000, console.log('Server listening on port 3000'));