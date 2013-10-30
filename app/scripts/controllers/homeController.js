'use strict';

ABAApp.controller('HomeController', ['$scope', 'Drinks', function ($scope, Drinks) {
    Drinks.updateDrinks();
    $scope.drinks = Drinks.getDrinks();
    alert("updated");

    $scope.updateDrinks = function() {
    	Drinks.updateDrinks();
    	$scope.drinks = Drinks.getDrinks();
    }
  }]);
