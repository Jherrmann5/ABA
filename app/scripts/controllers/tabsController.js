'use strict';

ABAApp.controller('TabsController', ['$scope', 'Tabs', '$filter', function ($scope, Tabs, $filter) {
	$scope.openTabs = Tabs.openTabs;
	
	$scope.resetNewTab = function() {
		$scope.newTab = {
			name: '',
			amt: 0.00,
			drinks: []
		};
	};

	$scope.resetNewTab();

	$scope.openNewTab = function(tab) {
		Tabs.openNewTab(tab);
		$scope.openTabs = Tabs.openTabs;
		$scope.resetNewTab();
	};

	$scope.closeTab = function(tab) {
		Tabs.closeTab(tab);
		$scope.openTabs = Tabs.openTabs;
	};
}]);
