angular
	.module('myApp')
	.controller('entrepreneurController', function($scope, dataFactory, authService) {
		authService.getAuth();
		$scope.industryId = ""
		$scope.gender = ""
		$scope.minority = ""
		$scope.language = ""
		$scope.entrepreneurOrder = 'last_name'
		$scope.toggleEntrepreneurOrder = function(field) {
			if (field === 'ownerName' && $scope.entrepreneurOrder !== 'last_name') {
				$scope.entrepreneurOrder = 'last_name'
			} else if (field === 'ownerName' && $scope.entrepreneurOrder !== '-last_name') {
				$scope.entrepreneurOrder = '-last_name'
			}
		}
		// $scope.filterIndustry = function (company) {
		// 	if(!$scope.industryId) {
		// 		return true
		// 	} else {
		// 		return company.industry_id == $scope.industryId
		// 	}
		// }
		// $scope.filterCity = function (company) {
		// 	if(!$scope.city) {
		// 		return true
		// 	} else {
		// 		return company.city == $scope.cityName
		// 	}
		// }
		$scope.filterLanguage = function (entrepreneur) {
			if(!$scope.language) {
				return true
			} else {
				return entrepreneur.languageSpoken == $scope.language
			}
		}

		$scope.filterGender = function (entrepreneur) {
			if(!$scope.gender) {
				return true
			} else {
				return entrepreneur.gender == $scope.gender
			}
		}

		$scope.filterMinority = function (entrepreneur) {
			if(!$scope.minority) {
				return true
			} else {
				return entrepreneur.isMinority.toString() == $scope.minority
			}
		}
		dataFactory.getAllEntrepreneurs()
			.then(function(data) {
				$scope.entArray = data
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
