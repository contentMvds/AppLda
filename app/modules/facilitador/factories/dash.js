function DashFactory(){

    var factory = {
        getApiTarefas : _getApiTarefas
    };

    // função principal para tratamento dos dados 
    function _getApiTarefas( res ){

        // Verificando se dados existem 
        if(angular.isUndefined( res ) ){
            return;
        }
        if(angular.isUndefined( res.data ) ){
            return;
        }
        if(angular.isUndefined( res.data[0] ) ){
            return;
        }

        // Jogando informações em uma variavel local
        var agenda = res.data[0].data;

        var result = [];
        // Fazendo interação com as informações recebias
        angular.forEach(agenda, function( value ){
            // Adicionando os dados em um array
            result.push( _convertApi( value ) );
        });
        // Retornando valores já tratados
        return result;
    }
    // Função para converte das keys de ingles para pt-br
    function _convertApi( item ){
        var result = {};

        if( angular.isUndefined(item) ){
            return;
        }
        if( angular.isDefined(item.id) ){
            result.id = item.id;
        }
        if( angular.isDefined(item.title) ){
            result.titulo = item.title;
        }
        if( angular.isDefined(item.userResponsible) ){
            result.responsavel = item.userResponsible;
        }
        if( angular.isDefined(item.dt_activity) ){
            result.dataAgenda = item.dt_activity;
        }
        if( angular.isDefined(item.importance) ){
            result.importancia = item.importance;
        }
        if( angular.isDefined(item.Note) ){
            result.observacoes = item.Note;
        }
        
        // Verificando o tipo de importancia e inserindo a cor necessaria
        if(item.importance == "Urgente"){
            result.class = 'red';
        }else if(item.importance == "Importante"){
            result.class = 'yellow';
        }else{
            result.class = 'green';
        }
        
        return result;
    }

    return factory;
}

angular.module('appLda')
        .factory('DashFactory',DashFactory);