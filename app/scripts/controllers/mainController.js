'use strict';

angular.module('ABAApp')
.controller('MainController', ['$scope', '$location', function ($scope, $location) {
	$scope.init = function() {
		$route.reload();
	}
	$scope.pages = [
	{
		name: 'Home',
		link: 'home'
	},
	{
		name: 'Tabs',
		link: 'tabs'
	},
	{
		name: 'Inventory',
		link: 'inventory'
	},
	{
		name: 'Settings',
		link: 'settings'
	}
	];

	$scope.activePage = function(page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	}
}]);
