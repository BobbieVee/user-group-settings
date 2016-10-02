var express = require('express');
var path = require('path');
var app = express();
//const path = require('path');

module.exports = app;

<<<<<<< HEAD
// app.use(express.static(path.join(__dirname, 'node_modules')));
// app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res, next){
	res.send('Hello');
});

=======
app.use(express.static(path.join(__dirname,'/node_modules')));
app.use(express.static(path.join(__dirname,'/browser')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'index.html'));
});
>>>>>>> fce0a30e236084015a802f6bdca17b2f4835db97
