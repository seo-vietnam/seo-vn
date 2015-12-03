'use strict';

angular.module('alBookingApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    "content" : {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController',
                        controllerAs: 'main'
                    }
                }
            });
    });
