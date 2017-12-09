function DashCtrl( $rootScope,$state, DashFactory, DashService, FacilitadorService ) {
    var vm = this;

    vm.agendas = {};
    vm.error = "";
    vm.id = "";

    vm.deleteTarefa = _deleteTarefe;
    vm.editTarefa =  _editTarefa;

    _init();

    /**
     * Função responsavel por enviar para a pagina de editar tarefa 
     * @param : id 
     * @return : none
     */
    function _editTarefa( id ){
        $state.go( "main.editTarefa",{ id : id} );
    }
    /**
     * Função responsavel por deletar uma tarefa especifica
     * @param : id 
     * @return : none
     */
    function _deleteTarefe( id ){
       FacilitadorService.deleteApiTarefa( id ).then( _successTarefaDelete, _ErroTarefaDelete );
    }
    /**
     * Função para caso a requisição de success 
     * @param : Object 
     * @return : none
     */
    function _successTarefaDelete( response ){
        alert('Tarefa Apagada com sucesso');
    }
    /**
     * Função para caso de erro na requisição
     * @param : Object 
     * @return : none
     */
    function _ErroTarefaDelete( response ){
        alert('Erro ao apagar tarefa, se persistir contate o administrador');
    }
    /**
     * Função responsavel por pegar os dados 
     * @param : String 
     * @return : none
     */
    function _init(){
        DashService.getListService( $rootScope.usuario ).then( _apiSuccess, _apiError );
    }
    /**
     * Função responsavel por tratar as informações caso de success na requisição
     * @param : Object 
     * @return : none
     */
    function _apiSuccess( response ){
        // Chamando a função do factory para tratas os dados
        vm.agendas = DashFactory.getApiTarefas( response );
    }
    /**
     * Função responsavel caso a requisição de error
     * @param : String 
     * @return : none
     */
    function _apiError( error ){
        // Inserindo mensagem de error
        vm.error = "Error ao pegar agenda, Contate o administrador do sistema, Error: " + error;
    }
}

angular.module('appLda')
        .controller('DashCtrl', DashCtrl);