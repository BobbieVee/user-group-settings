userApp.directive('navBar', function(){
	return{
		//url:'/navBar',
		scope:{
			user:'=',
		},
		templateUrl:'/navBar.html',

	}
})