'use strict';

angular.module('toDoListApp')
	.controller('ToDoListCtrl', ['$scope',function ($scope) {
			
			$scope.checked = false;
			$scope.unchecked = true;
			
			
		
			$scope.completed = function(index,todo){
				//variable that stores the completed task
				//this will be moved into completed task area
				var completedTaskList = $scope.doneTasks;
				$scope.todos.splice(index,1);
				completedTaskList.push(todo);
			};

		}]
	);
