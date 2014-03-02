'use strict';

angular.module('toDoListApp')
	.directive('sortable', function () {
		return {
			restrict: 'E',
			replace:true,
			templateUrl:'partial/todo.html'
			
		};
	});
