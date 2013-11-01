'use strict';

angular.module('ABAApp')
  .controller('SettingsController', ['$scope', 'IngredientsFactory', 
  	function ($scope, IngredientsFactory) {
    $scope.bayIngredients = IngredientsFactory.bayIngredients;
  }]);
