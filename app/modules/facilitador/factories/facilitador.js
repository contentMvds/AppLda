function FacilitadorFactory( $filter ){
    var factory = {
        getChangeImportance : _getChangeImportance,
        convertDate : _convertDate,
        getApiSuccess : _getApiSuccess,
        getUniqueTarefa : _getUniqueTarefa
    };

    /**
     * Função responsavel por Calcular a importancia da tarefa
     * @param: Objeto.
     * @return: String.
     */ 
    function _getChangeImportance( helpImportance ){

        if(angular.isUndefined( helpImportance )){
            return false;
        }

        var total = 0;
        var importancia = "";

        /*
        * Tipo de perguntas
            - recurso
            - atrapalhar
            - outras
            - depende
            - prazo
            - prejuizo

          Somando quantas opções foram escolhidas,
          Inserido regras que definem a importancia da tarefa.
        */

        // Verificando quantos sim
        if( helpImportance.recurso === 'sim' ){
            total = 3 + total;
        }
        if( helpImportance.atrapalhar === 'sim' ){
            total = 3 + total;
        }
        if( helpImportance.outras === 'sim' ){
            total = 3 + total;
        }
        if( helpImportance.depende === 'sim' ){
            total = 3 + total;
        }
        if( helpImportance.prazo === 'sim' ){
            total = 3 + total;
        }
        if( helpImportance.prejuizo === 'sim' ){
            total = 3 + total;
        }
        // Verificando quantos talvez
        if( helpImportance.recurso === 'sn' ){
            total = 2 + total;
        }
        if( helpImportance.atrapalhar === 'sn' ){
            total = 2 + total;
        }
        if( helpImportance.outras === 'sn' ){
            total = 2 + total;
        }
        if( helpImportance.depende === 'sn' ){
            total = 2 + total;
        }
        if( helpImportance.prazo === 'sn' ){
            total = 2 + total;
        }
        if( helpImportance.prejuizo === 'sn' ){
            total = 2 + total;
        }
        // Verificando quantos não
        if( helpImportance.recurso === 'nao' ){
            total = 1 + total;
        }
        if( helpImportance.atrapalhar === 'nao' ){
            total = 1 + total;
        }
        if( helpImportance.outras === 'nao' ){
            total = 1 + total;
        }
        if( helpImportance.depende === 'nao' ){
            total = 1 + total;
        }
        if( helpImportance.prazo === 'nao' ){
            total = 1 + total;
        }
        if( helpImportance.prejuizo === 'nao' ){
            total = 1 + total;
        }
        
        // Verificando pontuação
        if( total >= 12 ){
            importancia = "Prioridade";
        }else if( total < 12 && total >= 8 ){
            importancia = "Urgente";
        }else{
            importancia = "Importante";
        }

        return importancia;
    };
    /**
     * Função responsavel por converte a data formato americano
     * @param: date.
     * @return: date.
     */ 
    function _convertDate( date ){
        
        if(angular.isUndefined( date ) ){
            return;
        }

        return $filter( 'date' )( date, 'yyyy-MM-dd' );

    }
    /**
     * Função responsavel para o tratamento de erro do serviço
     * @param: Objeto.
     * @return: String.
     */ 
    function _getApiSuccess( result ){
        var retorno = result.data[0].data;

        if(angular.isUndefined( retorno ) ){
            return true;
        }else{
            return false;
        }
    }
    /**
     * Função responsavel para verificar integridade do retorno
     * @param: Objeto.
     * @return: Object.
     */ 
    function _getUniqueTarefa( tarefa ){
        var result = tarefa.data[0].data[0];

        if(angular.isUndefined( result ) ){
            return;
        }
        
        return result;

    }

    return factory;
}

angular.module('appLda')
        .factory('FacilitadorFactory',FacilitadorFactory);





