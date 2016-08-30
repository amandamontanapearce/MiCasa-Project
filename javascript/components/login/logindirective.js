(function(){
  angular
  .module('myApp.login')
  .directive('login', login);
  function login(){
    var directive = {
      restrict: "E",
      templateUrl: 'templates/login.html',
      scope: {},
      controller: loginController,
      controllerAs: 'loginController'
    };
    return directive;
  }
  loginController.$inject = ['loginService'];
  function loginController(loginService){
    this.submit = function(username, password) {
      loginService.loginUser(username, password);
    };
  }
})();
