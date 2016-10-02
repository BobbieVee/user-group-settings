var server = require('http').createServer(require('./app'));

var port = process.env.PORT || 3000;



server.listen(port, function(){
	console.log('server is up and listening intently on port ', port);
});