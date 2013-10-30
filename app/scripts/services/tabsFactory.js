'use strict';

ABAApp.factory('Tabs', ['$http', function($http) {
	var tabsFactory = {};
	
	tabsFactory.openTabs = [
		{
			name: 'Matt Elliott',
			amt: 62.50,
			drinks: [
				{
					name: 'Whiskey on the Rocks',
					price: 4.25
				},
				{
					name: 'Whiskey Sour',
					price: 4.00
				}
			]
		},
		{
			name: 'Joel Herrmann',
			amt: 17.00,
			drinks: [
				{
					name: 'Rum & Coke',
					price: 3.50
				}
			]
		},
		{
			name: 'Trent Todd',
			amt: 235.14,
			drinks: [
				{
					name: 'Whiskey & Coke',
					price: 4.50
				}
			]
		}
	];

	tabsFactory.getOpenTabs = function() {
		return tabsFactory.openTabs;
	};

	tabsFactory.updateData = function() {
		var response = $http.get('tabs.php');
	};

	return tabsFactory;
}]);