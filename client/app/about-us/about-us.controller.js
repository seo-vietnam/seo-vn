'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('AboutUsController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.about;
            $scope.$parent.activeMenu =  App.pageMenu.item3.name;
    });
})();
