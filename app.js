var express = require('express');

var app = express.createServer();
app.get('/', function(req, res) {
    res.send('test\n');
});

module.exports = app;

