function LoginCtrl($rootScope, LoginFactory, $location ) {
    var vm = this;
    
    vm.Submit = login;

    function login(){
         var userObj = {
            user : vm.username,
            pass : vm.password
        };

        var result = LoginFactory.validatorLogin( userObj );

        if (result) {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        }else{
            alert('Você errou alguma coisa');
        }
    }
}

angular.module('appLda')
        .controller('LoginCtrl', LoginCtrl);