var chucvusApp = angular.module('chucvusApp', ['ngRoute']);

chucvusApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/addchucvu', {
            controller: 'AddChucVuController'
        }).
        otherwise({
            redirectTo: '/addchucvu'
        });
  }]);