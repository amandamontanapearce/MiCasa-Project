angular
 .module('myApp')
 .controller('addEntrepreneurController', function($scope, dataFactory){
   dataFactory.getAllClasses.then(function(data) {
     console.log(data);
     $scope.classes = data
   })
   $scope.addEntrepreneur = function (owner) {
     console.log("Owner with Education?", owner);
       dataFactory.addOwner(owner).then(function(data) {
         console.log("adding data", data)
       })
    }
 })
