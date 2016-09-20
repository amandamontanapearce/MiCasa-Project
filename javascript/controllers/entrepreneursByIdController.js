angular
	.module('myApp')
	.controller('entrepreneursByIdController', function($scope, $stateParams, dataFactory, $state) {
    $scope.entrepreneur = {};
    $scope.classArray = [];
    dataFactory.getEntrepreneurById($stateParams.id)
			.then(function(data) {
				$scope.entrepreneur = data[0][0]
        $scope.classArray = data[1]
        $scope.business = data[2][0]
			})
		$scope.editEntrepreneur = function() {
			console.log('hit');
			dataFactory.updateEntrepreneur($scope.entrepreneur, $stateParams.id)
		}
  });
