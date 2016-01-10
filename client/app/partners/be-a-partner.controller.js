'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('BeAPartnerController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.partner;
            $scope.$parent.activeMenu =  App.pageMenu.item4.name;
            $("html, body").scrollTop(0);

    });
})();
