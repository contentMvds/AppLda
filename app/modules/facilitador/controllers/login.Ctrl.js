function LoginCtrl() {
    var vmLogin = this;

    vmLogin.titleApp = "Login Page";
}

angular.module('appLda')
        .controller('LoginCtrl', LoginCtrl);