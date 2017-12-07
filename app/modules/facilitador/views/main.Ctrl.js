function MainCtrl() {
    var vm = this;
    vm.hideMenu = false;
}

angular.module('appLda')
        .controller('MainCtrl', MainCtrl);