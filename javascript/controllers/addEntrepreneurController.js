angular
 .module('myApp')
 .controller('addEntrepreneurController', function($scope, dataFactory){
   $scope.message = "Hello Lucas!"
   $scope.addEntrepreneur = function (owner) {
     console.log("Owner with Education?", owner);
       dataFactory.addOwner(owner).then(function(data) {
         console.log(data)
       })
    }
 })
