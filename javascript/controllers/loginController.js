function _setUserData(data) {
    user = data;
}
angular
    .module('myApp')
    .controller('loginController', function($scope, dataFactory, $state) {
        $scope.login = function(username, password) {
            dataFactory.getLogin(username, password).then(function(response) {
                loginInfo = {
                    getToken: user.token,
                    getUserId: user.userId,
                }
                _setUserData(response.data);
                $state.go('home')
            }, function errorCallback(err) {
                console.log(err);
            });
        }
    });
