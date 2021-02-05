angular.module('MyApp', ['ngMaterial'])
      .controller('AppCtrl', function ($scope, $mdSidenav) {
        $scope.showMobileMainHeader = true;
        $scope.openSideNavPanel = function () {
          $mdSidenav('left').open();
        };
        $scope.closeSideNavPanel = function () {
          $mdSidenav('left').close();
        };
      });