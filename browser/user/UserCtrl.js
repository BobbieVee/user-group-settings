userApp.controller('loginCtrl', function($scope,UserFactory){
	$scope.user = UserFactory.user;

	$scope.login() = function (){
		return UserFactory.login($scope.credentials.username, $scope.credentials.password);
	}  
})