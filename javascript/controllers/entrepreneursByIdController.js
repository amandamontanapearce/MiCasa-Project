angular
	.module('myApp')
	.controller('entrepreneursByIdController', function($scope, $stateParams, dataFactory, $state) {
    $scope.entrepreneur = {};
    $scope.classArray = [];
    dataFactory.getEntrepreneurById($stateParams.id)
			.then(function(data) {
				$scope.entrepreneur = data[0][0]
        $scope.classArray = data[1]
        $scope.businesses = data[2]
			})
			dataFactory.getAllIndustries
				.then(function(data) {
					$scope.industries = data
				})
		$scope.addANewBusiness = function() {
			console.log("button clicked");
			dataFactory.addBusinessById($stateParams.id, $scope.newBusiness)
			.then(function() {
				console.log("We're reloading");
				$state.reload()
			})
		}

  });
