'use strict';

ABAApp.factory('IngredientsFactory', function() {
	var ingredientsFactory = {};

	ingredientsFactory.bayIngredients = [
		{
			type: "Rum",
			level: 100,
			mlVol: 750,
			bay: 1
		},
		{
			type: "Coke",
			level: 100,
			mlVol: 1000,
			bay: 2
		},
		{
			type: "Gin",
			level: 100,
			mlVol: 750,
			bay: 3
		},
		{
			type: "Bay 4",
			level: null,
			mlVol: null,
			bay: 4
		},
		{
			type: "Bay 5",
			level: null,
			mlVol: null,
			bay: 5
		},
	];
	ingredientsFactory.allIngredients = [
		{
			type: "Rum"
		},
		{
			type: "Coke"
		},
		{
			type: "Whiskey"
		},
		{
			type: "Tonic"
		},
		{
			type: "Gin"
		},
		{
			type: "Vodka"
		},
		{
			type: "Sprite"
		}
	];

	ingredientsFactory.isValidDrink = function(drink) {
		var numIng = drink.ing.length;
		var numBay = ingredientsFactory.bayIngredients.length;
		var checksum = 0; // Checksum to determine if all bayIngredient levels are OK
		
		// Go through each ingredient and compare with bayIngredient levels
		for(var i = 0; i < numIng; i++) {
			var currIng = drink.ing[i];
			// Try to find matching ingredient in ing bays
			for(var j = 0; j < numBay; j++) {
				var currBay = ingredientsFactory.bayIngredients[j];
				// Check to make sure there are more than 1.5 oz left in bottle
				// If there are less than 1.5 oz left, skip this bottle!
					// Conversion to check how many oz left in bottle
				var ozLeft = (currBay.mlVol * currBay.level/100) * 0.033814;
				if(currIng.name === currBay.type && ozLeft >= (1.5*currIng.amt)) {
					checksum++;
					j = numBay; // Quit looping through bays for current ingredient
				}
			}
		}

		if(checksum == numIng) {
			return true;
		} else {
			return false;
		}
	};

	return ingredientsFactory;
});