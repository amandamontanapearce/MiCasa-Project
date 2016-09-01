function _setUserData(data) {
    user = data;
}
angular
    .module('myApp')
    .controller('loginController', function($scope, dataFactory, $state) {
        $scope.login = function(username, password) {
            dataFactory.getLogin(username, password).then(function(response) {
                _setUserData(response.data);
                loginInfo = {
                    getToken: user.token,
                    getUserId: user.userId
                }
                $state.go('home')
            }, function errorCallback(err) {
                console.log(err);
            });
        }
    });
