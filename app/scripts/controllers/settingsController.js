'use strict';

angular.module('ABAApp')
  .controller('SettingsController', ['$scope', 'IngredientsFactory',
  	function ($scope, IngredientsFactory) {
    $scope.bayIngredients = IngredientsFactory.bayIngredients;
    $scope.allIngredients = IngredientsFactory.allIngredients;
    $scope.selectedBay = $scope.bayIngredients[0];

    $scope.rinseSystem = function() {
    	// Send command to BoneFactory to do a system rinse
    	//BoneFactory.operation(7);
    	alert("System rinsing...");
    }

    $scope.updateSelectedBayIng = function() {
    	if($scope.selectedIngredient === null) {
    		$scope.selectedBay.type = "Bay "+$scope.selectedBay.bay;
    		$scope.selectedBay.level = null;
    		$scope.selectedBay.mlVol = null;
    	} else {
    		$scope.selectedBay.type = $scope.selectedIngredient.type;
    	}
    }

    // Searches the array of all ingredients and returns the object
    //   that matches the passed in type
    var findMatchingIng = function(type) {
    	var i;
    	for(i = 0; i < $scope.allIngredients.length; i++) {
    		if(type === $scope.allIngredients[i].type) {
    			return $scope.allIngredients[i];
    		}
    	}
    }

    // Assigns a new SelectedIngredient based on the bay that is
    //   currently selected
    $scope.updateSelectedIng = function() {
    	$scope.selectedIngredient = findMatchingIng($scope.selectedBay.type);
    }
    // Assign SelectedIngredient
    $scope.updateSelectedIng();

    var updateBayIngredients = function() {
    	$scope.bayIngredients[$scope.selectedBay.bay-1].type =
    		$scope.selectedIngredient.type;
    }
  }]);
