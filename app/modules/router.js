function config($stateProvider, $httpProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('login');
    
        $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        .state('main.login', {
            url: 'login',
            controller: 'LoginCtrl as vm',
            templateUrl: 'modules/login/views/login.html'
        })
        .state('main.dash', {
            url: 'dashboard',
            controller: 'DashCtrl as vm',
            templateUrl: 'modules/dashboard/views/dash.html'
        })
        .state('main.facilitador', {
            url: 'facilitador',
            controller: 'facilitadorCtrl as vm',
            templateUrl: 'modules/facilitador/views/facilitador.html'
        })
        
    }
    
    angular.module('appLda').config(config);