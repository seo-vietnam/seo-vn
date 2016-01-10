'use strict';
(function () {

    function MainController($scope, $http) {
        $scope.$parent.pageTitle = App.pageTitle.home;
        $("html, body").scrollTop(0);

    }

    angular.module('alBookingApp')
        .controller('MainController', MainController);
})();
