angular
  .module('myApp')
  .controller('businessByIdController', function($scope, $stateParams, dataFactory, $state) {
    $scope.business = {}
    $scope.commentArray = []
    dataFactory.getBusinessById($stateParams.id)
      .then(function(data) {
        var date_opened = data[1][0].date_opened;
        var date_closed = data[1][0].date_closed;
        var format = 'LL';
        $scope.date_opened = moment(date_opened).format(format);
        if (date_closed == null) {
          $scope.date_closed = "(Still Open)"
        } else {
          $scope.date_closed = moment(date_closed).format(format);
        }
        $scope.commentArray = data[0]
        $scope.business = data[1][0]
        $scope.times
      })
    dataFactory.getAllIndustries
      .then(function(data) {
        $scope.industries = data
      })
    $scope.deleteBusiness = function(businessName) {
      if (confirm("Are you sure you want to delete " + businessName + "? This action cannot be undone.")) {
        dataFactory.deleteBusinessById($stateParams.id).then(function() {
          $state.go('home')
        })
      }
    }
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
