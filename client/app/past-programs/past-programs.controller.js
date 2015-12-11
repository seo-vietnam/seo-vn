'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('PastProgramsController', function ($scope, $http) {
            $scope.$parent.activeMenu =  App.pageMenu.item1.name;
            $scope.menuFilters = App.pastPrograms.sideBar;
    });
})();
