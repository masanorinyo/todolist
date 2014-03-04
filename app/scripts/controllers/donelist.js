'use strict';

angular.module('toDoListApp')
	.controller('DoneListCtrl', ['$scope',function ($scope){
			
			$scope.checked = true;
			$scope.unchecked = false;
			
			$scope.cancel = function(index,doneTask){
				var todoList=$scope.todos;
				$scope.doneTasks.splice(index,1);
				todoList.push(doneTask);

			};

		}]
	);
