function DashService( $http ){
    // Caminho para pegas os dados do serviço
    var url = "http://localhost:8083/agenda";
    
    var service = {
        getListService : _getListService
    };
    // Função para pegas as informações do serviço
    function _getListService(){

       return $http.get( url );
    
    }
    
    return service;
}

angular.module('appLda').service('DashService',DashService);