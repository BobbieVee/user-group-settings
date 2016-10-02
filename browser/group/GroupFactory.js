userApp.factory('GroupService',function(){
	
	var GroupService = {};
	var positions = []; //real stuff

	var positions = ['Admin', 'RH'];

	GroupService.getAll = function(){
		return $http.get('/api/group')
			.then(function(results){
				positions = results.data;
			})
	}

	

	return GroupService;

})