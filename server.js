var server = require('http').createServer(require('./app'));

var port = process.env.PORT || 3000;

if(process.env.SYNC){
	require('./db').syncAndSeed()
	.then(function(){
		console.log('synced and crazily seeded');
	})
	.catch(function(err){
		console.log(err)
	})
}



server.listen(port, function(){
	console.log('server is up and listening intently on port ', port);
});