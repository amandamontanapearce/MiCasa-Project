angular
 .module('myApp')
 .controller('addEntrepreneurController', function($scope, dataFactory){
   $scope.message = "Hello Lucas!"
   $scope.addEntrepreneur = function (owner) {
       dataFactory.addOwner(owner).then(function(data) {
       })
    }
 })
