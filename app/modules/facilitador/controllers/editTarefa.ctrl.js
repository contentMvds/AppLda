function EditFacilitadorCtrl( $stateParams, $state, $rootScope, FacilitadorFactory, FacilitadorService ) {
    var vm = this;

    vm.id = $stateParams.id;

    vm.tarefa = {};

    vm.editTarefa = _editTarefa;

    _init();
     /**
     * Função responsavel por pegar informações iniciais
     * @param: none.
     * @return: none.
     */
    function _init(){
        FacilitadorService.getApiTarefa( vm.id ).then( _successGetTarefa, _errorGetTarefa );
    }
     /**
     * Função responsavel pelo tratamento das informações caso de sucesso na requisição
     * @param: none.
     * @return: none.
     */
    function _successGetTarefa( response ){
        vm.tarefa = FacilitadorFactory.getUniqueTarefa( response );
    }
     /**
     * Função responsavel por informa que houve erro na requisição e enviar para o dashboard
     * @param: none.
     * @return: none.
     */
    function _errorGetTarefa( error ){
        // Enviando mensagem ao usuario
        alert('Tarefa não encontrada, se o erro persisti contate o administrador');
        // Redirecionando para o dashboard
        $state.go("main.dash");
    }
    /**
     * Função responsavel por enviar as informações ao serviço
     * @param: Objeto.
     * @return: String.
     */
    function _editTarefa(){
        // Convertendo a data 
        vm.tarefa.dt_activity = FacilitadorFactory.convertDate(vm.tarefa.dt_activity);
        // Enviando para o serviço
        FacilitadorService.editApiTarefa( vm.id, vm.tarefa )
                            .then( _successEditTarefa, _errorEditTarefa );
    }
     /**
     * Função responsavel por informa que houve sucesso na inserção e direcionar para o dashboard
     * @param: none.
     * @return: none.
     */
    function _successEditTarefa( response ){
        // Enviando mensagem de sucesso para o usuario
        alert('Editado com sucesso!');
        // Redirecionando para o dashboard
        $state.go("main.dash");
    }
     /**
     * Função responsavel por informa ao usuario que houve erro em salvar os dados
     * @param: Objeto.
     * @return: String.
     */
    function _errorEditTarefa( error ){
        // Enviando mensagem de erro ao usuario
        alert('Erro ao editar registro, tente novamente, Se o erro persisti contate o administrador!');
    }

}

angular.module('appLda')
        .controller('EditFacilitadorCtrl', EditFacilitadorCtrl);