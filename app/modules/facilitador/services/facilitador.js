function FacilitadorService( $http ){

    var url = "http://localhost:8083/agenda/";

    var service = {
        getApiTarefa :_getApiTarefa,
        setApiTarefa : _setApiTarefa,
        editApiTarefa : _editApiTarefa,
        deleteApiTarefa : _deleteApiTarefa
    };
    
     /**
     * Função responsavel de pegar informações de uma tarefa
     * @param : Number 
     * @return : Object
     */
    function _getApiTarefa( id ){
        return $http({
            method: 'GET',
            url: url + id
        });
    }
    /**
     * Função responsavel de enviar os dados para insert no serviço.
     * @param : objeto Agenda 
     * @return : Object
     */
    function _setApiTarefa( data ){
        
        return $http({
            method: 'POST',
            url: url + 'add',
            data: data
        });
    }
    /**
     * Função responsavel de enviar os dados para editar informaçoes
     * @param : Number, Object 
     * @return : Object
     */
    function _editApiTarefa( id, data ){
        return $http({
            method: 'PUT',
            url: url + 'edit/' + id,
            data : data
        });
    }
    /**
     * Função responsavel de deletar uma tarefa
     * @param : Number 
     * @return : none
     */
    function _deleteApiTarefa( id ){
        return $http({
            method: 'DELETE',
            url: url + 'delete/' + id
        });
    }
    
    return service;
}

angular.module('appLda')
        .service('FacilitadorService',FacilitadorService);