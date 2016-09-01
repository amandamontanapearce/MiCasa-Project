angular
	.module('myApp')
  .controller('addABusinessController', function($scope, dataFactory, $state) {
	dataFactory.getAllIndustries.then(function(data) {
		console.log(data);
		$scope.industries = data;
	})
	dataFactory.getAllClasses.then(function(data) {
		console.log(data);
		$scope.classes = data;
	})

	$scope.addBusiness = function (business, owner) {
		console.log("Client Business",business);
		console.log("Owner with Education?", owner);
			dataFactory.addBusiness(business, owner).then(function(data) {
				$state.go('businessById', { id: data })
			})
	}




})
