'use strict';

angular.module('toDoListApp')
	.controller('DoneListCtrl', ['$scope',function ($scope){
			
			$scope.checked = true;
			$scope.unchecked = false;
			
			$scope.cancel = function(index,doneTask,sIndex){
				var todoList=$scope.todos[sIndex].info;
				var info = {
					'title':doneTask.title,
					'note':doneTask.note
				};
				$scope.doneTasks[sIndex].info.splice(index,1);
				todoList.push(info);

			};

		}]
	);
