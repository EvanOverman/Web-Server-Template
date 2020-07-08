// Made by Evan Overman
// 7 / 7 / 2020

const {exec} = require('child_process');
const app = require('express')();
const path = require('path');
const fs = require('fs');

// This would be at http://you.ip:yourport/.

app.get('/', (req, res) => {

    // You can put any html code in here, or just a string.

    res.send('A string' + '<p>html<p>');
});

// This would be at http://your.ip:yourport/dir.
// You can repeat this as many times as needed.

app.get('/dir', (req, res) => {
    res.send('Another page');
});

// Set 3000 to whatever port you would like it to be hosted on.
app.listen(3000, console.log('Server listening on port 3000'));