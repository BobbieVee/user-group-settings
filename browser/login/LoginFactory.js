userApp.factory('AuthService',function($state, $q){
	var AuthService = {};
	var userList = []; //testing
	var user = {};

	AuthService.login = function(credentials){
		return $http.post('/api/user', credential)
			.then (function(){
				//angular.copy(result.data, user)
				//return user;
				$state.go('home');
			})



		// return $http.post('/login')
		// 	.then (function(result){
		// 		angular.copy(result.data, user)
		// 		return user;
		// 	})
		// user = {
		// 	username: credentials.username,
		// 	password: credentials.password,
		// 	id: 5,
		// };

		// return {
  //     	user: _user,
  //     	logout: function(){
  //      	var dfd = $q.defer();
  //     	angular.copy({}, _user);
  //     	dfd.resolve();
  //     	return dfd.promise;
      
  //     },
  //     login: function(){
  //       var dfd = $q.defer();
  //       angular.copy({ id: 3}, _user);
  //       dfd.resolve();
  //       return dfd.promise;
  //     }


			
			// var dfd = $q.defer();
			// angular.copy({id:3}, user);
			// dfd.resolve();
			// return dfd.promise;
		


		return user; 
	};


	AuthService.logout = function(){
		return $http.delete('/api/user')
			.then (function(){
				$state.go('home');
			})
	}

	return AuthService;
})