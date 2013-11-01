'use strict';

ABAApp.factory('TabsFactory', function() {
	var tabsFactory = {};
	
	tabsFactory.openTabs = [];

	tabsFactory.openNewTab = function(tab) {
		tabsFactory.openTabs.push(tab);
	};

	tabsFactory.closeTab = function(tab) {
		var index = tabsFactory.openTabs.indexOf(tab);
		tabsFactory.openTabs.splice(index, 1);
	};

	tabsFactory.drinkToTab = function(drink, tab) {
		var index = tabsFactory.openTabs.indexOf(tab);
		tabsFactory.openTabs[index].drinks.push(drink);
		tabsFactory.openTabs[index].amt += drink.price;
	};

	tabsFactory.removeDrinkFromTab = function(drink) {
		// If the drink has a tabName assigned to it,
		//    remove this from entry from the tab
		if(drink.tabName !== '') {
			// If queue item is associated with a tab, subtract
			//    the drink from tab
			var index = tabsFactory.findIndexByName(drink.tabName);
			tabsFactory.openTabs[index].amt -= drink.price;
			// Go through drink array of matching tab
			for(var i = 0; i < tabsFactory.openTabs[index].drinks.length; i++) {
				if(tabsFactory.openTabs[index].drinks[i].name === drink.name) {
					// If drink name is found, remove from drinks array
					tabsFactory.openTabs[index].drinks.splice(i, 1);
				}
			}
		}
	};

	tabsFactory.findIndexByName = function(name) {
		var length = tabsFactory.openTabs.length;
		for(var i = 0; i < length; i++) {
			if(name === tabsFactory.openTabs[i].name) {
				return i;
			}
		}
		return -1;
	};

	return tabsFactory;
});