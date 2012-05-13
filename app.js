var express = require('express');

var app = express.createServer();
app.get('/', function(req, res) {
    res.send('test v1\n');
});

module.exports = app;

