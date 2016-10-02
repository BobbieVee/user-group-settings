var userApp = angular.module('userApp', ['ui.router'])

userApp
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url:'/',
				templateUrl:'/home.html',
			})
			.state('login',{
				url:'/login',
				templateUrl:'login/login.html',
				controller:'LoginCtrl',
			})
			.state('settings',{
				url:'/settings',
				templateUrl:'/group/settings.html',
				controller:'GroupCtrl',
			})
	})
