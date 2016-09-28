angular
    .module('myApp')
    .service('authService', function($window, $location) {
        return {
            getAuth: function() {
                var token = $window.localStorage['jwToken'];
                if (token) {
                    console.log("logged in");
                } else {
                    alert('You need to be logged in to view');
                    $location.path('/');
                }
            }
        }
    })
