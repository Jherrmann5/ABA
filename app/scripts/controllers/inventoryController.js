'use strict';

ABAApp.controller('InventoryController', ['$scope', 'IngredientsFactory', '$filter', function ($scope, IngredientsFactory, $filter) {
	$scope.bayIngredients = IngredientsFactory.bayIngredients;
}]);