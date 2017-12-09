function config($stateProvider, $httpProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/login');
    
        $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginCtrl as vm',
            templateUrl: 'modules/facilitador/views/login.html',
        })
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        .state('main.dash', {
            url: 'dashboard',
            controller: 'DashCtrl as vm',
            resolve:{
                ckeck : function($rootScope,$location){
                    if (!$rootScope.loggedIn ) {
                        $location.path('/login');
                    };
                }
            },
            templateUrl: 'modules/facilitador/views/dash.html'
        })
        .state('main.facilitador', {
            url: 'facilitador',
            controller: 'FacilitadorCtrl as vm',
            resolve:{
                ckeck : function($rootScope,$location){
                    if (!$rootScope.loggedIn ) {
                        $location.path('/login');
                    }
                }
            },
            templateUrl: 'modules/facilitador/views/facilitador.html'
        })
        .state('main.editTarefa', {
            url: 'editTarefa',
            controller: 'EditFacilitadorCtrl as vm',
            resolve:{
                ckeck : function($rootScope, $location){
                    if (!$rootScope.loggedIn ) {
                        $location.path('/login');
                    }
                }
            },
            templateUrl: 'modules/facilitador/views/editTarefa.html',
            params:{'id': null},
        })
        
    }
    
    angular.module('appLda').config(config);