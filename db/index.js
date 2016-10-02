var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);

var User = db.define('user',{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	}

});

var Group = db.define('group',{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});


module.exports = {
	models: {
		User: User,
		Group: Group
	},

	syncAndSeed: function(){
		return db.sync({force: true })
		.then(function(){
			return Promise.all([
				User.create({name: 'Moe', password: 'foo'}),
				User.create({name: 'Larry', password: 'bar'}),
				Group.create({name: 'Admin'}),
				Group.create({name: 'Janitor'})
			]);
		});
	}
} 