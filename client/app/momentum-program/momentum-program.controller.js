'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('MomentumProgramController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.momentum;
            $scope.$parent.activeMenu =  App.pageMenu.item3.name;
            $scope.menuFilters = App.momentumProgram.sideBar;
            $("html, body").scrollTop(0);
    });
})();
