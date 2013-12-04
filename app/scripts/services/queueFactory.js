'use strict';

ABAApp.factory('QueueFactory', ['IngredientsFactory', 'TabsFactory', '$timeout',
	function(IngredientsFactory, TabsFactory, $timeout) {
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

	var requestDrink = function(drink) {
		if(IngredientsFactory.isValidDrink(drink)) {
			makeDrink(drink);
		} else {
			var alertMsg = "-- " + drink.name;
			if(drink.tabName !== undefined) {
				// No longer charge customer for a drink that cannot be made
				TabsFactory.removeDrinkFromTab(drink);
				alertMsg = alertMsg.concat(" for " + drink.tabName);
			}
			alertMsg = alertMsg.concat(" -- cannot be made. Check that there is enough "+
				"inventory left and the correct drinks are connected to the system.");
			alert(alertMsg);
			drinkInProgress = false;
		}
		queueFactory.drinks.shift();
	}

	var makeDrink = function(drink){
		var numIng = drink.ing.length;
		var numBay = IngredientsFactory.bayIngredients.length;

		for(var i = 0; i < numIng; i++) {
			var currIng = drink.ing[i];
			// Try to find matching ingredient in ing bays
			for(var j = 0; j < numBay; j++) {
				var currBay = IngredientsFactory.bayIngredients[j];
				// Check to make sure there are more than 1.5 oz left in bottle
				// If there are less than 1.5 oz left, skip this bottle!
					// Conversion to check how many oz left in bottle
				var ozLeft = (currBay.mlVol * currBay.level/100) * 0.033814;
				if(currIng.name === currBay.type && ozLeft >= (1.5*currIng.amt)) {
					for(var k = 0; k < currIng.amt; k++){
						//do bonescript function
						//BoneFactory.operation(j);

						// Convert ml to oz, do conversion, subtract
						//   % from current bottle level, and round
						//   to 2 decimal places
						var ozVol = currBay.mlVol*0.033814;
						currBay.level -= (1.5/ozVol)*100;
						currBay.level = currBay.level.toFixed(2);
						j = numBay;	// Quit looping through ingredients since one has been found
					}
				}
			}
		}

		$timeout(function() {
			// Simulate a drink being made
			drinkInProgress = false;
		}, 4500);
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
				requestDrink(drinkToCreate);
			}
			queueFactory.poll();
		}, 2500);
	};

	queueFactory.poll();
	return queueFactory;
}]);
