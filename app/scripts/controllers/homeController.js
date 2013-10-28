'use strict';

ABAApp.controller('HomeController', ['$scope', 'Drinks', function ($scope, Drinks) {
    $scope.drinks = Drinks.getDrinks();
  }]);
