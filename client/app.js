var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'clients/index.html',
			controller:'carController'
		})
		.when('/cars', {
			templateUrl:'templates/list.html',
			controller:'carController'
		})
		.when('/cars/create', {
			templateUrl:'templates/add.html',
			controller:'carController'
		})
		.when('/cars/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'carController'
		})
		.when('/cars/:id/show', {
			templateUrl:'templates/show.html',
			controller:'carController'
		});
});


