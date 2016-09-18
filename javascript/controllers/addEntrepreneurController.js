angular
 .module('myApp')
 .controller('addEntrepreneurController', function($scope, dataFactory){
   dataFactory.getAllClasses.then(function(data) {
     $scope.classes = data
   })
   $scope.addEntrepreneur = function (owner) {
       dataFactory.addOwner(owner).then(function(data) {
       })
    }
 })
