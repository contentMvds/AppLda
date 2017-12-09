function FacilitadorCtrl() {
    var vm = this;

    vm.showformSecond = false;
    vm.showImportancia = false;
    vm.facilitador = {};


    vm.pular = _pular;
    vm.continuar = _continuar;
    vm.insertTarefa = _insertTarefa;

    function _continuar(){
        vm.showformSecond = true;
        vm.showImportancia = true;
        
    }
    function _insertTarefa(){}
   
    function _pular(){
        vm.showformSecond = true;
        vm.showImportancia = true;
    }
}

angular.module('appLda')
        .controller('FacilitadorCtrl', FacilitadorCtrl);