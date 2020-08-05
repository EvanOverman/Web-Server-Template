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

    res.sendFile(path.join(__dirname + '/pages/stylesheet.css'));

    console.log('Got request for /stylesheet.css ... ');

});

// This would be at http://your.ip:yourport/dir.
// You can repeat this as many times as needed.

app.get('/dir', (req, res) => {
    res.send('Another page');
});

// Set 3000 to whatever port you would like it to be hosted on.
app.listen(3000, console.log('Server listening on port 3000'));