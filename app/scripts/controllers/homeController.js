'use strict';

ABAApp.controller('HomeController', ['$scope', 'Drinks', 'Queue', function ($scope, Drinks, Queue) {
	$scope.drinks = Drinks.drinks;
	$scope.queue = Queue.drinks;

	$scope.addToQ = function(drink) {
		Queue.addToQ(drink);
		$scope.queue = Queue.drinks;
	};

	$scope.removeFirstInQ = function() {
		Queue.removeFirstInQ();
		$scope.queue = Queue.drinks;
	};

	$scope.removeFromQ = function(queueItem) {
		Queue.removeFromQ(queueItem);
		$scope.queue = Queue.drinks;
	};
}]);
