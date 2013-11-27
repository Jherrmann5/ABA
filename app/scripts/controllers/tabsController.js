'use strict';

ABAApp.controller('TabsController', ['$scope', 'TabsFactory', '$filter', function ($scope, TabsFactory, $filter) {
	$scope.openTabs = TabsFactory.openTabs;
	
	$scope.resetNewTab = function() {
		$scope.newTab = {
			name: '',
			amt: 0.00,
			drinks: []
		};
	};

	$scope.resetNewTab();

	$scope.openNewTab = function(tab) {
		TabsFactory.openNewTab(tab);
		$scope.resetNewTab();
	};

	$scope.closeTab = function(tab) {
		TabsFactory.closeTab(tab);
	};

	$scope.removeDrinkFromTab = function(drink) {
		TabsFactory.removeDrinkFromTab(drink);
	};
}]);
