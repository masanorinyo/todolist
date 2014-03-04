'use strict';

angular.module('toDoListApp')
	.controller('ToDoListCtrl', ['$scope',function ($scope) {
			
			$scope.checked = false;
			$scope.unchecked = true;
			
			
		
			$scope.completed = function(index,task,sIndex){
				//variable that stores the completed task
				//this will be moved into completed task area
				var completedTaskList = $scope.doneTasks[sIndex].info;
				
				var done = {'title':task.title,'note':task.note};
				$scope.todos[sIndex].info.splice(index,1);
				completedTaskList.push(done);
			};

		}]
	);
