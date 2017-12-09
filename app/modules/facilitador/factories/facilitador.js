function facilitadorFactory(){
    var factory = {
        getChangeImportance : _getChangeImportance
    };

    function _getChangeImportance( helpImportance ){
        if(angular.isUndefined( helpImportance )){
            return false;
        }
        var total = {};
        /*
        recuros
        atrapalhar
        outras
        depende
        prazo
        prejuizo
        
        */
        // Verificando quantos sim
        if( helpImportance.recuros == 'sim' ){
            total.sim = 1;
        }
        if( helpImportance.atrapalhar == 'sim' ){
            total.sim += 1;
        }
        if( helpImportance.outras == 'sim' ){
            total.sim += 1;
        }
        if( helpImportance.depende == 'sim' ){
            total.sim += 1;
        }
        if( helpImportance.prazo == 'sim' ){
            total.sim += 1;
        }
        if( helpImportance.prejuizo == 'sim' ){
            total.sim += 1;
        }
        // Verificando quantos não
        if( helpImportance.recuros == 'nao' ){
            total.nao = 1;
        }
        if( helpImportance.atrapalhar == 'nao' ){
            total.nao += 1;
        }
        if( helpImportance.outras == 'nao' ){
            total.nao += 1;
        }
        if( helpImportance.depende == 'nao' ){
            total.nao += 1;
        }
        if( helpImportance.prazo == 'nao' ){
            total.nao += 1;
        }
        if( helpImportance.prejuizo == 'nao' ){
            total.nao += 1;
        }
        // Verificando quantos talvez
        if( helpImportance.recuros == 'talvez' ){
            total.talvez = 1;
        }
        if( helpImportance.atrapalhar == 'talvez' ){
            total.talvez += 1;
        }
        if( helpImportance.outras == 'talvez' ){
            total.talvez += 1;
        }
        if( helpImportance.depende == 'talvez' ){
            total.talvez += 1;
        }
        if( helpImportance.prazo == 'talvez' ){
            total.talvez += 1;
        }
        if( helpImportance.prejuizo == 'talvez' ){
            total.talvez += 1;
        }

        // Calculando importancias 

    }
    
}


angular.module('appLda').factory('facilitadorFactory',facilitadorFactory);