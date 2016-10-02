var userApp = angular.module('userApp', ['ui.router'])

userApp
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url:'/',
				templateUrl:'/home.html',
			})
			.state('settings',{
				url:'/settings',
				templateUrl:'settings.html',
			})
			.state('login',{
				url:'/login',
				templateUrl:'user/login.html',
			})
	})
