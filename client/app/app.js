'use strict';

angular.module('alBookingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    "main" : {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('apply', {
                url: '/apply',
                views: {
                    "main" : {
                        templateUrl: 'app/apply/apply.html',
                        controller: 'ApplyController'
                    }
                }
            })
            .state('partners', {
                url: '/partners',
                views: {
                    "main" : {
                        templateUrl: 'app/partners/partners.html',
                        controller: 'PartnersController'
                    }
                }
            })
            .state('programs', {
                url: '/programs',
                views: {
                    "main" : {
                        templateUrl: 'app/programs/programs.html',
                        controller: 'ProgramsController'
                    }
                }
            })
            .state('momentumProgram', {
                url: '/momentum-program',
                views: {
                    "main" : {
                        templateUrl: 'app/momentum-program/momentum-program.html',
                        controller: 'MomentumProgramController'
                    }
                }
            })
            .state('pastPrograms', {
                url: '/past-programs',
                views: {
                    "main" : {
                        templateUrl: 'app/past-programs/past-programs.html',
                        controller: 'PastProgramsController'
                    }
                }
            })
            .state('aboutUs', {
                url: '/about-us',
                views: {
                    "main" : {
                        templateUrl: 'app/about-us/about-us-story.html',
                        controller: 'AboutUsController'
                    }
                },
                params: {active: "story"}
            })
            .state('aboutUsVMV', {
                url: '/about-us-vmv',
                views: {
                    "main" : {
                        templateUrl: 'app/about-us/about-us-vmv.html',
                        controller: 'AboutUsController'
                    }
                },
                params: {active: "vmv"}
            })
            .state('aboutUsPeople', {
                url: '/about-us-people',
                views: {
                    "main" : {
                        templateUrl: 'app/about-us/about-us-people.html',
                        controller: 'AboutUsController'
                    }
                },
                params: {active: "people"}
            })
            .state('donate', {
                url: '/donate',
                views: {
                    "main" : {
                        templateUrl: 'app/donate/donate.html',
                        controller: 'DonateController'
                    }
                },
                params: {active: "people"}
            })
            .state('be-a-partner', {
              url: '/be-a-partner',
              views: {
                "main" : {
                  templateUrl: 'app/partners/be-a-partner.html',
                  controller: 'BeAPartnerController'
                }
              }
            })
        ;
    })
    .controller('AppController', function ($rootScope, $scope) {
        $rootScope.App = App;
        $scope.pageTitle = App.pageTitle.home;

        $scope.isActived = function(menu) {
            return $scope.activeMenu == menu;
        };
    })
  .controller('AboutUsController', function ($scope, $stateParams) {
    $scope.$parent.pageTitle = App.pageTitle.about;
    $scope.$parent.activeMenu = App.pageMenu.item1.name;
    $scope.menuFilters = App.aboutUs.sideBar;
    $scope.isActive = function (active) {
      return active === $stateParams.active;
    };

    $("html, body").scrollTop(0);
  })
  .controller('ApplyController', function ($scope) {
    $scope.$parent.pageTitle = App.pageTitle.apply;
    $scope.$parent.activeMenu = App.pageMenu.item2.name;
    var option = {
      items: 1,
      smartSpeed: 500,
      loop: false,
      nav: true,
      navText: ['<a class="prev apply__carousel__item__link" href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-left"></span></a>', '<a class="next apply__carousel__item__link" href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-right"></span></a>'],
      dots: false
    };
    $(".owl-carousel").owlCarousel(option);
    $("html, body").scrollTop(0);
  })
  .controller('DonateController', function ($scope, $sce) {
    $scope.$parent.pageTitle = App.pageTitle.donate;
    $scope.$parent.activeMenu =  App.pageMenu.item5.name;
    $scope.videoSrc = $sce.trustAsResourceUrl(App.donate.video);
    $("html, body").scrollTop(0);
  })
  .controller('MainController', function ($scope) {
    $scope.$parent.pageTitle = App.pageTitle.home;
    $("html, body").scrollTop(0);
  })
  .controller('MomentumProgramController', function ($scope, $http) {
    $scope.$parent.pageTitle = App.pageTitle.momentum;
    $scope.$parent.activeMenu =  App.pageMenu.item3.name;
    $scope.menuFilters = App.momentumProgram.sideBar;
    $("html, body").scrollTop(0);
  })
  .controller('BeAPartnerController', function ($scope, $http) {
    $scope.$parent.pageTitle = App.pageTitle.partner;
    $scope.$parent.activeMenu =  App.pageMenu.item4.name;
    $("html, body").scrollTop(0);

  })
  .controller('PartnersController', function ($scope, $http) {
    $scope.$parent.pageTitle = App.pageTitle.partner;
    $scope.$parent.activeMenu =  App.pageMenu.item4.name;
    $scope.enableOpacity = false;
    $scope.menuFilters = App.partners.sideBars;
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
        for (var i=0; i<App.partners.sideBars.length; i++) {
          Array.prototype.push.apply(golds, App.partners.sideBars[i].items.golds);
          Array.prototype.push.apply(silvers, App.partners.sideBars[i].items.silvers);
          Array.prototype.push.apply(normals, App.partners.sideBars[i].items.normals);
        }
        Array.prototype.push.apply($scope.branches, golds);
        Array.prototype.push.apply($scope.branches, silvers);
        Array.prototype.push.apply($scope.branches, normals);
      } else {
        for (var j=0; j<App.partners.sideBars.length; j++) {
          if (App.partners.sideBars[j].title.toLowerCase() === data.toLowerCase()) {
            Array.prototype.push.apply($scope.branches, App.partners.sideBars[j].items.golds);
            Array.prototype.push.apply($scope.branches, App.partners.sideBars[j].items.silvers);
            Array.prototype.push.apply($scope.branches, App.partners.sideBars[j].items.normals);
            break;
          }
        }
      }

      if (event !== undefined && event !== null) {
        $('.side-bar__item__title').removeClass('side-bar__item--active');
        var element = angular.element(event.currentTarget.firstChild);
        element.addClass('side-bar__item--active');
        //if (data === 'all') {
        //    //$('.side-bar__item__branch--container').show();
        //} else {
        $('.side-bar__item__branch--container').hide();
        $(event.currentTarget.nextSibling).show();
        //}
      }
    };

    $scope.filter('all', null);
    $("html, body").scrollTop(0);
  })
  .controller('PastProgramsController', function ($scope, $http) {
    $scope.$parent.pageTitle = App.pageTitle.pastProgram;
    $scope.$parent.activeMenu =  App.pageMenu.item3.name;
    $scope.menuFilters = App.pastPrograms.sideBar;

    $("html, body").scrollTop(0);
  })
  .controller('ProgramsController', function ($scope, $http) {
    $scope.$parent.pageTitle = App.pageTitle.program;
    $scope.$parent.activeMenu =  App.pageMenu.item3.name;
    $scope.menuFilters = App.program.sideBar;
    $("html, body").scrollTop(0);
  })
;
