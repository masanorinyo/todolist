'use strict';

angular.module('toDoListApp')
	.directive('sortable', function () {
		return {
			restrict: 'EA',
			replace:true,
			templateUrl:'partial/todo.html'
		};
	});
