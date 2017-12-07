function MainFactory(){
    var factory = {
        validatorLogged : _validatorLogged
    };
    // Verificando se o usuario é real
    function _validatorLogged( value ){
        var result = false;

        if(angular.isUndefined(value)){
            result = false;
        }

        if(angular.isDefined(value) && value == 'admin'){
            result = true;
        }else{
            result = false;
        }

        return result;
    }

    return factory;
}

angular.module("appLda").factory("MainFactory",MainFactory);