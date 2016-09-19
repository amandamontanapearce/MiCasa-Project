angular
	.module('myApp')
	.controller('businessController', function($scope, $filter, dataFactory) {
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
		$scope.filterIndustry = function () {
			console.log($scope.industryId);
			if($scope.industryId === null){
				$scope.industryId = true
			} else {
				$scope.industryId = $scope.industryId
			}
		}
		$scope.filterCity = function () {
			if($scope.cityName === ""){
				$scope.cityName = true
			} else {
				$scope.cityName = $scope.cityName
			}
		}
		$scope.filterGender = function () {
			if($scope.gender === ""){
				$scope.gender = true
			} else {
				$scope.gender = $scope.gender
			}
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
