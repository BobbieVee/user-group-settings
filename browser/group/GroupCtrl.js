userApp.controller('GroupCtrl', function($scope, $rootScope, GroupService){
	
	var groups = GroupService.positions;

	$scope.change = function(){
		//return GroupService.getAll();
		console.log('aaa');
	}
})