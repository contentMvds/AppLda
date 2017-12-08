function FacilitadorCtrl() {
    var vm = this;
    vm.opened = false;

    vm.open = _open;
    
    function _open($event){
        $event.preventDefault();
        $event.stopPropagation();

        vm.opened = true;
        console.log(vm.opened);
    }
}

angular.module('appLda')
        .controller('FacilitadorCtrl', FacilitadorCtrl);