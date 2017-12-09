function DashCtrl( DashFactory, DashService ) {
    var vm = this;
    vm.agendas = {};
    vm.error = "";

    _init();
    // Função para pegas os dados no serviço
    function _init(){
        DashService.getListService().then( _apiSuccess, _apiError );
    }
    // Função para fazer os tratamentos de dados caso de sucesso
    function _apiSuccess( response ){
        // Chamando a função do factory para tratas os dados
        vm.agendas = DashFactory.getApiTarefas( response );
    }
    // Função para filtrar e tratar caso de error
    function _apiError( error ){
        vm.error = error;
    }
}

angular.module('appLda')
        .controller('DashCtrl', DashCtrl);