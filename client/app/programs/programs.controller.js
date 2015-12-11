'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('ProgramsController', function ($scope, $http) {
            $scope.$parent.activeMenu =  App.pageMenu.item1.name;
            $scope.menuFilters = App.program.sideBar;
            $scope.intros = App.program.content.introduction.lines;
    });
})();
