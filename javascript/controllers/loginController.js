function _setUserData(data) {
    user = data;
}
angular
    .module('myApp')
    .controller('loginController', function($scope, dataFactory, $state, $window, $location) {
        $scope.uiRouterState = $state;
        $scope.login = function(username, password) {
            dataFactory.getLogin(username, password).then(function(response) {
                _setUserData(response.data);
                loginInfo = {
                    getToken: user.token,
                    getUserId: user.userId
                }
                console.log(user.token);
                $window.localStorage['jwToken'] = user.token;
                $state.go('home')
            }, function errorCallback(err) {
                console.log(err);
            });
        }
      $scope.logout = function() {
        $window.localStorage.removeItem('jwToken');
      }
      $scope.homeRedirect = function() {
        if ($window.localStorage['jwToken']) {
          $location.path('home');
        } else {
          $state.go('login');
        }
      }
    });
