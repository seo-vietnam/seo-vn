'use strict';

angular.module('alBookingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    "main" : {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('apply', {
                url: '/apply',
                views: {
                    "main" : {
                        templateUrl: 'app/apply/apply.html',
                        controller: 'ApplyController'
                    }
                }
            })
        ;
    });
