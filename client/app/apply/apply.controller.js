'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('ApplyController', function ($scope, $http) {
            $scope.$parent.activeMenu =  App.pageMenu.item2.name;
    });
})();
