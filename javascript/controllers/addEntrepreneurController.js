angular
 .module('myApp')
 .controller('addEntrepreneurController', function($scope, dataFactory, authService){
   authService.getAuth();
   dataFactory.getAllClasses.then(function(data) {
     $scope.classes = data
   })
   $scope.addEntrepreneur = function (owner) {
     $scope.submit = {}
     $scope.submit = angular.copy($scope.owner)
       dataFactory.addOwner($scope.submit).then(function(data) {
       })
       $scope.owner = {}
    }
 })
