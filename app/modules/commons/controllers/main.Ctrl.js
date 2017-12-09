function MainCtrl($rootScope) {
    var vm = this;
    vm.usuario = $rootScope.usuario;
}

angular.module('appLda')
        .controller('MainCtrl', MainCtrl);