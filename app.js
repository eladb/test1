var express = require('express');

var app = express.createServer();
app.get('/', function(req, res) {
    res.send('test v2\n');
});

module.exports = app;

if (process.env.port) {
    app.listen(process.env.port);
    console.log('started app on port', process.env.port);
}


