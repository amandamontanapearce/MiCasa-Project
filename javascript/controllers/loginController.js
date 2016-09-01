function _setUserData(data){
     user = data;
   }
angular
  .module('myApp')
  .controller('loginController', function($scope, dataFactory, $state) {
    $scope.login = function(username, password){
      console.log(username);
      dataFactory.getLogin(username, password).then(function(response) {
        console.log('hitting login');
        console.log('response', response);
        _setUserData(response.data);
        console.log(response.data);
       loginInfo = {
         getToken: user.token,
         getUserId: user.userId,
       }
       console.log(loginInfo);
        $state.go('home')
      }, function errorCallback(err){
        console.log(err);
      });
    }
});
