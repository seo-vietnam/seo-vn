'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('ProgramsController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.program;
            $scope.$parent.activeMenu =  App.pageMenu.item3.name;
            $scope.menuFilters = App.program.sideBar;
            $("html, body").scrollTop(0);
    });
})();
