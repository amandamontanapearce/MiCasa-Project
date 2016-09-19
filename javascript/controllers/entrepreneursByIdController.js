angular
	.module('myApp')
	.controller('entrepreneursByIdController', function($scope, $stateParams, dataFactory, $state) {
    $scope.entrepreneur = {};
    $scope.classArray = [];
    dataFactory.getEntrepreneurById($stateParams.id)
			.then(function(data) {
				$scope.entrepreneur = data[0][0]
				console.log($scope.entrepreneur);
        $scope.classArray = data[1]
        $scope.business = data[2][0]
			})

  });
