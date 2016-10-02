var express = require('express');
var path = require('path');
var app = express();

module.exports = app;


app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(require('body-parser').json());


app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/users', require('./routes/users'));
app.use('/api/groups', require('./routes/groups'));
// app.use('api/sessions', require('./routes/sessions'));
