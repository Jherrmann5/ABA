'use strict';

ABAApp.controller('InventoryController', ['$scope', 'Ingredients', '$filter', function ($scope, Ingredients, $filter) {
	$scope.CurrentIngredients = Ingredients.getIngredients();
}]);