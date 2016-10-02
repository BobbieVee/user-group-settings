var express = require('express');
var path = require('path');
var app = express();
//const path = require('path');

module.exports = app;


app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res, next){
	res.send('Hello');
});




