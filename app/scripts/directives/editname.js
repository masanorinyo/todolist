'use strict';

angular.module('toDoListApp')
	.directive('editName', function () {
		
		return {
			restrict: 'A',
			scope:{
				index:'@',
				formStyle:'@'
			},
			transclude:true,
			templateUrl:'partial/editName.html'
		};
	});
