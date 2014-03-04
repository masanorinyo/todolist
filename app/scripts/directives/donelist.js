'use strict';

angular.module('toDoListApp')
	.directive('donelist', function () {
		return {
			restrict: 'E',
			replace:true,
			templateUrl:'partial/doneTask.html'
		};
	});
