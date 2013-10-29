'use strict';

angular.module('ABAApp')
  .controller('InventoryController', function ($scope){
	$scope.Bottles = [
	{
		Bay: 'Rum',
		Level: '100%'
	},
	{
		Bay: 'Whiskey',
		Level: '100%'
	},
	{
		Bay: 'Vodka',
		Level: '100%'
	},
	{
		Bay: 'Coke',
		Level: '100%'
	}
	{
		Bay: 'Sprite',
		Level: '100%'
	}
	];
});