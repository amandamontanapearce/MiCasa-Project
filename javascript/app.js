angular
	.module('myApp', ['ui.router', 'ui.bootstrap', 'myApp.login', 'angularUtils.directives.dirPagination'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: "templates/login.html"
			})
			.state('home', {
				url: '/home',
				controller: "businessController",
				templateUrl: "templates/business.html"
			})
			.state('addABusiness', {
				url: '/businesses/add',
				controller:"addABusinessController",
				templateUrl:"templates/addbusiness.html"
			})

			.state('businessById', {
				url: '/businesses/:id',
				controller: "businessByIdController",
				templateUrl: "templates/business-detail.html"
			})
			.state('entrepreneurs', {
				url: '/entrepreneurs',
				controller: "entrepreneursController",
				templateUrl: "templates/entrepreneurs.html"
			})
			.state('entrepreneursById', {
				url: '/entrepreneurs/:id',
				controller: "entrepreneursByIdController",
				templateUrl: "templates/entrepreneur-detail.html"
			})


	});
