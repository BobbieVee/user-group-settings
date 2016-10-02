var router = require('express').Router();
var models = require('../db').models;
var User = models.User;

module.exports = router;

router.get('/',function(req, res, next){
	User.findAll()
	.then(function(users){
		res.send(users)
	})
	.catch(next);
});

router.delete('/:id', function(req, res, next){
	User.destroy({where: { id: req.params.id}})
	.then(function (){
		res.sendStatus(200);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	User.create(req.body )
	.then(function(user){
		res.send(user);
	})
	.catch(next);
});