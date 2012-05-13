var express = require('express');

var started = new Date();

var app = express.createServer();
app.get('/', function(req, res) {
    res.send('test v8. started at ' + started.toString() + '\n');
});

module.exports = app;

if (process.env.port) {
    app.listen(process.env.port);
    console.log('started app on port', process.env.port);
}


