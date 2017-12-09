function DashService( $http ){
    // Caminho para pegas os dados do serviço
    var url = "http://localhost:8083/agenda/";
    
    var service = {
        getListService : _getListService
    };

    /**
     * Função responsavel por pegar todas as agendas 
     * @param : String 
     * @return : Object
     */
    function _getListService( user ){
        
        return $http({
            method: 'GET',
            url: url + 'user/' + user
        });
    
    }
    
    return service;
}

angular.module('appLda')
        .service('DashService',DashService);