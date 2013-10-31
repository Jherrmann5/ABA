'use strict';

ABAApp.factory('Tabs', function() {
	var tabsFactory = {};
	
	tabsFactory.openTabs = [];

	tabsFactory.openNewTab = function(tab) {
		tabsFactory.openTabs.push(tab);
	};

	tabsFactory.closeTab = function(tab) {
		var index = tabsFactory.openTabs.indexOf(tab);
		tabsFactory.openTabs.splice(index, 1);
	};

	return tabsFactory;
});