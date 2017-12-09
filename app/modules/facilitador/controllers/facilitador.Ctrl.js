function FacilitadorCtrl( $state, $rootScope, FacilitadorFactory, FacilitadorService ) {
    var vm = this;

    vm.showformSecond = false;
    vm.showImportancia = false;
    vm.showImportanciaContinuer = false;

    vm.facilitador = {};
    vm.agenda = {};
    
    vm.pular = _pular;
    vm.continuar = _continuar;
    vm.insertTarefa = _insertTarefa;

    /**
     * Função responsavel por liberar o frmInsertTarefa e inserir a importância.
     */
    function _continuar(){
        // Liberando segundo form
        vm.showformSecond = true;
        vm.showImportanciaContinuer = true;
        // Inserindo a importancia
        vm.agenda.importance = FacilitadorFactory.getChangeImportance( vm.facilitador );
    }
     /**
     * Função responsavel por pular frmHelp e liberar o frmInsertTarefa.
     */
    function _pular(){
        // Liberando form.
        vm.showformSecond = true;
        vm.showImportancia = true;
    }
     /**
     * Função responsavel por enviar os dados para o serviço.
     */
    function _insertTarefa(){

        vm.agenda.userResponsible = $rootScope.usuario;
        vm.agenda.dt_activity = FacilitadorFactory.convertDate( vm.agenda.dt_activity);

        result = FacilitadorService.setApiTarefa( vm.agenda ).then(_sucessPost, _errorPost);
    }
     /**
     * Função responsavel caso de success no serviço.
     */
    function _sucessPost( response ){

        if(FacilitadorFactory.getApiSuccess( response ) ){
            $state.go( 'main.dash' );
        }else{
            vm.error = "Houve um problema na inserção contate o administrdor do sistema";
        }
    }
     /**
     * Função responsavel casso de erro no serviço.
     */
    function _errorPost( error ) {
        vm.error = "Erro ao enviar as informações";
    }
   

}

angular.module('appLda')
        .controller('FacilitadorCtrl', FacilitadorCtrl);