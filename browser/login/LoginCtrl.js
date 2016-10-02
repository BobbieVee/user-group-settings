userApp.controller('LoginCtrl', function($scope, $rootScope, AuthService){
	//$scope.user = LoginFactory.user;

	//$scope.user = LoginFactory.user;

	$rootScope.user = AuthService.user;
	$scope.login = function (){
		//console.log ($scope.credentials);
		$rootScope.user = AuthService.login($scope.credentials);
		console.log ($rootScope.user);

		//console.log ('$scope.user is ' +  $rootScope.user.password);
		return;
	}  
})