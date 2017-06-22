'use strict';

/**
 * @ngdoc function
 * @name pAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pAppApp
 */
angular.module('pAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
