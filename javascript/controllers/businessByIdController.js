angular
	.module('myApp')
	.controller('businessByIdController', function($scope, $stateParams, dataFactory, $state) {
		$scope.business = {}
		$scope.commentArray = []
		dataFactory.getBusinessById($stateParams.id)
			.then(function(data) {
				var date_opened = data[1][0].date_closed;
				var date_closed = data[1][0].date_closed;
				var format = 'LL';
				$scope.date_opened = moment(date_opened).format(format);
				$scope.date_closed = moment(date_closed).format(format);
				$scope.commentArray = data[0]
				$scope.business = data[1][0]
				$scope.times
			})
		dataFactory.getAllIndustries
			.then(function(data) {
				$scope.industries = data
			})
		$scope.editBusiness = function() {
			dataFactory.updateBusiness($scope.business)
		}
		$scope.postNote = function() {
			dataFactory.postNote($stateParams.id, $scope.newNote)
			.then(function() {
				$state.reload()
			})
		}
	})
