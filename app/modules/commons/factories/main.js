function MainFactory(){
    var factory = {
        showMenu: _shoMenu
    }

    function _shoMenu( value ){
        if( !value ){
            return true;
        }else{
            return;
        }
    }
}




angular.module("todoApp").factory("MainFactory",MainFactory);