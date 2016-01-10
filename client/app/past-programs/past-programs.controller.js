'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('PastProgramsController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.pastProgram;
            $scope.$parent.activeMenu =  App.pageMenu.item3.name;
            $scope.menuFilters = App.pastPrograms.sideBar;

            $("html, body").scrollTop(0);
    });
})();
