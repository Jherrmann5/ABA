'use strict';

angular.module('ABAApp')
.controller('TabsController', function ($scope) {
	$scope.customers = [
		{'name':'Matt Elliott', 'amount':'62.50'},
		{'name':'Joel Herrmann', 'amount':'17.00'}
	];
});
