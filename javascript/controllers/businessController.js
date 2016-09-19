angular
	.module('myApp')
	.controller('businessController', function($scope, $filter, dataFactory) {
		$scope.industryFilter = ''
		$scope.cityFilter = ''
		$scope.genderFilter = ''
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
		$scope.filterIndustry = function () {
			console.log($scope.industryFilter);
			// if($scope.industryFilter === '') {
			// 	$filter('filterIndustry')('resultArray')
			// } else {
			// 	$filter('filterIndustry')('resultArray', {industry_id: $scope.industryFilter})
			// }
		}
		dataFactory.getAll()
			.then(function(data) {

				$scope.resultArray = data
			})
		dataFactory.getAllIndustries
			.then(function(data) {
				console.log("industry", data)
				$scope.industries = data
			})
		dataFactory.getAllCities
			.then(function(data) {
				console.log(data);
				$scope.cities = data
			})
	})
