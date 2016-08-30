(function(){
  angular
    .module('myApp.login')
    .service('loginService', loginService);
    loginService.$inject = ['$http', '$location'];
    function loginService($http, $location){
      var user = {};
      return {
        getToken: getToken,
        getUserId: getUserId,
        loginUser: loginUser
      };
    function _setUserData(data){
      user = data;
    }
    function getToken(){
      return user.token;
    }
    function getUserId(){
      return user.userId;
    }
    function loginUser(username, password) {
      $http({
        method: 'post',
        params: {
          username: username,
          password: password
        },
        url: 'http://localhost:3000/login'
      }).then(function successCallback(response){
        console.log(response);
        _setUserData(response.data);
        $location.path('/home');
      }, function errorCallback(err){
        console.log(err);
      });
    }
  }
})();
