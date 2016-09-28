angular
	.module('myApp')
  .controller('addABusinessController', function($scope, dataFactory, $state, authService) {
	authService.getAuth();
	dataFactory.getAllIndustries.then(function(data) {

		$scope.industries = data;
	})
	dataFactory.getAllClasses.then(function(data) {
		$scope.classes = data;
	})

	$scope.addBusiness = function (business, owner) {
			dataFactory.addBusiness(business, owner).then(function(data) {
				$state.go('businessById', { id: data })
			})
	}
})
