'use strict';

angular.module('toDoListApp')
	.controller('ToDoListCtrl', ['$scope','$element','$timeout', function ($scope,$element,$timeout) {
			
			$scope.checked = false;
			$scope.unchecked = true;
			
			$scope.completed = function(index,task,sIndex){
				//variable that stores the completed task
				//this will be moved into completed task area
				
				var completedTaskList = $scope.doneTasks[sIndex].info;
				var done = {'title':task.title,'note':task.note};
				
				//fades out the selected task
				angular.element($element.children('li')[index]).fadeOut();
				
				//after the selected task fades out
				//removes the task and adds it to completed task list.
				$timeout(
					function(){
						$scope.todos[sIndex].info.splice(index,1);
						completedTaskList.push(done);
					},400);
				
			};

		}]
	);
