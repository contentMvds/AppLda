function LoginFactory(){
    var factory = {
        validatorLogin : _validatorLogin
    };

    function _validatorLogin( userObj ){
        var result = false;
        if( angular.isUndefined( userObj ) ){
            return
        };
        if( angular.isDefined(userObj.user) && userObj.user == 'admin' ){
            if( angular.isDefined(userObj.pass) && userObj.pass == 'admin' ){
                result = true;
            };
        };

        return result;
    }
    return factory;
};

angular.module('appLda')
            .factory('LoginFactory', LoginFactory);

