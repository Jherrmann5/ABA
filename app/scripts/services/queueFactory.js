'use strict';

ABAApp.factory('Queue', function() {
	var queueFactory = {};

	queueFactory.drinks = [];

	queueFactory.addToQ = function(drink) {
		queueFactory.drinks.push(drink);
	};

	queueFactory.removeFirstInQ = function() {
		queueFactory.drinks.shift();
	};

	queueFactory.removeFromQ = function(drink) {
		var index = queueFactory.drinks.lastIndexOf(drink);
		queueFactory.drinks.splice(index, 1);
	};

	return queueFactory;
});