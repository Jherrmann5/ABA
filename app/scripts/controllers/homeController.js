'use strict';

ABAApp.controller('HomeController', ['$scope', 'DrinksFactory', 'QueueFactory', 'TabsFactory',
	function ($scope, DrinksFactory, QueueFactory, TabsFactory) {
	$scope.drinks = DrinksFactory.drinks;
	$scope.queue = QueueFactory.drinks;
	$scope.tabs = TabsFactory.openTabs;

	$scope.addToQ = function(drink, tab) {
		QueueFactory.addToQ(drink, tab);
		$scope.queue = QueueFactory.drinks;
	};

	$scope.drinkToTab = function(drink, tab) {
		TabsFactory.drinkToTab(drink, tab);
		$scope.tabs = TabsFactory.openTabs;
	}

	$scope.removeFirstInQ = function() {
		QueueFactory.removeFirstInQ();
		$scope.queue = QueueFactory.drinks;
	};

	$scope.removeFromQ = function(queueItem) {
		TabsFactory.removeDrinkFromTab(queueItem);
		QueueFactory.removeFromQ(queueItem);
		$scope.queue = QueueFactory.drinks;
	};

	$scope.makeDrink = function(drink) {
		QueueFactory.makeDrink(drink);
		$scope.queue = QueueFactory.drinks;
	}
}]);
