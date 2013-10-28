'use strict';

ABAApp.factory('Tabs', function() {
	var openTabs = [
		{
			name: 'Matt Elliott',
			amt: 62.50
		},
		{
			name: 'Joel Herrmann',
			amt: 17.00
		},
		{
			name: 'Trent Todd',
			amt: 235.14
		}
	];
	return {
		getOpenTabs: function() {
			return openTabs;
		}
	}
});