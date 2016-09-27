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
        console.log("classArray=", $scope.classArray);
      })
    dataFactory.getAllIndustries
      .then(function(data) {
        $scope.industries = data
      })
    dataFactory.getAllClasses.then(function(data) {
      $scope.classes = data;
    })
    $scope.addANewBusiness = function() {
      console.log("button clicked");
      dataFactory.addBusinessById($stateParams.id, $scope.newBusiness)
        .then(function() {
          console.log("We're reloading");
          $state.reload()
        })
    }

    $scope.addANewClass = function() {
      dataFactory.addClasstoOwner($stateParams.id, $scope.newClass)
        .then(function() {
          $state.reload()
        })
    }

    $scope.deleteEntrepreneur = function(entrepreneurFirstName, entrepreneurLastName) {
      if (confirm("Are you sure you want to delete " + entrepreneurFirstName + " " + entrepreneurLastName + "? This action cannot be undone.")) {
        dataFactory.deleteEntrepreneurById($stateParams.id).then(function() {
          $state.go('home')
        })
      }
    }

    $scope.editEntrepreneur = function() {
      console.log('hit');
      dataFactory.updateEntrepreneur($scope.entrepreneur, $stateParams.id)
    }
  });
