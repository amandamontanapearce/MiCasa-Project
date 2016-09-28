angular
	.module('myApp')
	.controller('businessController', function($scope, dataFactory, authService) {
		authService.getAuth();
		$scope.industryId = ""
		$scope.cityName = ""
		$scope.gender = ""
		$scope.businessOrder = 'name'
		console.log("id", $scope.industryId);
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
		$scope.filterIndustry = function (company) {
			if(!$scope.industryId) {
				return true
			} else {
				return company.industry_id == $scope.industryId
			}
		}
		$scope.filterCity = function (company) {
			if(!$scope.cityName) {
				return true
			} else {
				return company.city == $scope.cityName
			}
		}
		$scope.filterGender = function (company) {
			if(!$scope.gender) {
				return true
			} else {
				return company.gender == $scope.gender
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
