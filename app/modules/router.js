function config($stateProvider, $httpProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('Login');
    
        $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        .state('main.login', {
            url: 'Login',
            controller: 'LoginCtrl as vm',
            templateUrl: 'modules/login/views/login.html'
        })
    }
    
    angular.module('appLda').config(config);