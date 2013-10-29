'use strict';

ABAApp.controller('TabsController', ['$scope', 'Tabs', '$filter', function ($scope, Tabs, $filter) {
	$scope.openTabs = Tabs.getOpenTabs();

	$scope.searchName = function(name) {
		$scope.queryResult = $filter('filter')($scope.openTabs, name, false);
		alert($scope.queryResult.name);
	}
}]);
