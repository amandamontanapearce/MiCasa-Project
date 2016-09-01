// (function(){
//   angular
//   .module('myApp')
//   .controller('loginController', loginController)
//   .directive('login', login);
//   function login(){
//     var directive = {
//       restrict: "E",
//       templateUrl: 'templates/login.html',
//       scope: {},
//       controller: "loginController",
//       controllerAs: 'loginController'
//     };
//     return directive;
//   }
//   loginController.$inject = ['loginService'];
//   function loginController(loginService){
//     console.log('hitting logincontroller');
//     this.submit = function(username, password) {
//       loginService.loginUser(username, password);
//     };
//   }
// })();
