angular
	.module('myApp')
	.controller('businessController', function($scope, dataFactory) {
		$scope.industryFilter = ''
		$scope.cityFilter = ''
		$scope.businessOrder = 'name'
		$scope.toggleBusinessOrder = function(field) {
			if (field === 'businessName' && $scope.businessOrder !== 'name') {
				$scope.businessOrder = 'name'
			} else if (field === 'businessName' && $scope.businessOrder !== '-name') {
				$scope.businessOrder = '-name'
			} else if (field === 'ownerName' && $scope.businessOrder !== 'last_name') {
				$scope.businessOrder = 'last_name'
			} else if (field === 'ownerName' && $scope.businessOrder !== '-last_name') {
				$scope.businessOrder = '-last_name'
			}
		}
		dataFactory.getAll()
			.then(function(data) {

				$scope.resultArray = data
			})
		dataFactory.getAllIndustries
			.then(function(data) {
				$scope.industries = data
			})
		dataFactory.getAllCities
			.then(function(data) {
				$scope.cities = data
			})
	})
