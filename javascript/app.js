angular
	.module('myApp', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('login', {
				url: '/',
				controller: "loginController",
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
			.state('addEntrepreneur', {
				url: '/entrepreneurs/add',
				controller: "addEntrepreneurController",
				templateUrl: "templates/addEntrepreneur.html"
			})
			.state('businessById', {
				url: '/businesses/:id',
				controller: "businessByIdController",
				templateUrl: "templates/business-detail.html"
			})
			.state('entrepreneurs', {
				url: '/entrepreneurs',
				controller: "entrepreneurController",
				templateUrl: "templates/entrepreneurs.html"
			})
			.state('entrepreneursById', {
				url: '/entrepreneurs/:id',
				controller: "entrepreneursByIdController",
				templateUrl: "templates/entrepreneur-detail.html"
			})
	});
