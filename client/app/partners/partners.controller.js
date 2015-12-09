'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('PartnersController', function ($scope, $http) {
            $scope.$parent.activeMenu =  App.pageMenu.item4.name;
            $scope.enableOpacity = false;
            $scope.menuFilters = App.partners.sideBar;
            $scope.branches = [];
            $scope.filter = function(data, event) {
                $scope.branches = [];
                $('.branch-grid__item').removeClass("branch-grid__item--opacity");
                if (data === undefined || data === null) {
                    return;
                }
                if (data === 'all') {
                    var golds = [];
                    var silvers = [];
                    var normals = [];
                    for (var i=0; i<App.partners.sideBar.length; i++) {
                        Array.prototype.push.apply(golds, App.partners.sideBar[i].branches.golds);
                        Array.prototype.push.apply(silvers, App.partners.sideBar[i].branches.silvers);
                        Array.prototype.push.apply(normals, App.partners.sideBar[i].branches.normals);
                    }
                    Array.prototype.push.apply($scope.branches, golds);
                    Array.prototype.push.apply($scope.branches, silvers);
                    Array.prototype.push.apply($scope.branches, normals);
                } else {
                    for (var j=0; j<App.partners.sideBar.length; j++) {
                        if (App.partners.sideBar[j].title.toLowerCase() === data.toLowerCase()) {
                            Array.prototype.push.apply($scope.branches, App.partners.sideBar[j].branches.golds);
                            Array.prototype.push.apply($scope.branches, App.partners.sideBar[j].branches.silvers);
                            Array.prototype.push.apply($scope.branches, App.partners.sideBar[j].branches.normals);
                            break;
                        }
                    }
                }

                if (event !== undefined && event !== null) {
                    $('.side-bar__item__title').removeClass('side-bar__item__title--active');
                    var element = angular.element(event.currentTarget.firstChild);
                    element.addClass('side-bar__item__title--active');
                    if (data === 'all') {
                        $('.side-bar__item__branch--container').show();
                    } else {
                        $('.side-bar__item__branch--container').hide();
                        $(event.currentTarget.nextSibling).show();
                    }
                }
            };

            //$scope.clickLogo = function(event) {
            //    var element = angular.element(event.currentTarget.parentElement);
            //    $('.branch-grid__item').addClass("branch-grid__item--opacity");
            //    element.removeClass("branch-grid__item--opacity");
            //};

            $scope.filter('all', null);
    });
})();
