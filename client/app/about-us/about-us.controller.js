'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('AboutUsController', function ($scope, $http) {
            $scope.$parent.activeMenu =  App.pageMenu.item3.name;
    });
})();
