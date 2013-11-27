'use strict';

ABAApp.factory('QueueFactory', ['IngredientsFactory', '$timeout',
	function(IngredientsFactory, $timeout) {
	var queueFactory = {};
	var drinkInProgress = false;

	queueFactory.drinks = [];

	queueFactory.addToQ = function(drink, tab) {
		var length = queueFactory.drinks.push(drink);
		var index = length -1;
		queueFactory.drinks[index].tabName = tab.name;
	};

	queueFactory.removeFirstInQ = function() {
		queueFactory.drinks.shift();
	};

	queueFactory.removeFromQ = function(drink) {
		var index = queueFactory.drinks.lastIndexOf(drink);
		queueFactory.drinks.splice(index, 1);
	};

	queueFactory.makeDrink = function(drink){
		var numIng = drink.ing.length;
		var numBay = IngredientsFactory.bayIngredients.length;

		for(var i = 0; i < numIng; i++) {
			var currIng = drink.ing[i];
			for(var j = 0; j < numBay; j++) {
				var currBay = IngredientsFactory.bayIngredients[j];
				if(currIng.name === currBay.type) {
					for(var k = 0; k < currIng.amt; k++){
						//do bonescript function
						//BoneFactory.operation(j);
						var ozVol = currBay.mlVol*0.033814;
						currBay.level -= (1.5/ozVol)*100;
						currBay.level = currBay.level.toFixed(2);
					}
				}
			}
		}

		IngredientsFactory.checkLevels();

		$timeout(function() {
			// Simulate a drink being made
			drinkInProgress = false;
		}, 7500);
	};

	// Poll the drink queue every 1.5 seconds to see if a drink
	//    is available to create
	queueFactory.poll = function() {
		$timeout(function() {
			// Make sure a drink is in the queue, a drink isn't currently
			//    being created, and a cup is present
			if((queueFactory.drinks.length > 0) && (drinkInProgress === false)) {
				drinkInProgress = true;
				var drinkToCreate = queueFactory.drinks[0];
				queueFactory.makeDrink(drinkToCreate);
				queueFactory.drinks.shift();
			}
			queueFactory.poll();
		}, 2500);
	};

	queueFactory.poll();
	return queueFactory;
}]);