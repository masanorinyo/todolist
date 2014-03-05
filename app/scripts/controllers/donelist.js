'use strict';

angular.module('toDoListApp')
	.controller('DoneListCtrl', ['$scope','$element','$timeout',function ($scope,$element,$timeout){
			
			$scope.checked = true;
			$scope.unchecked = false;
			
			$scope.cancel = function(index,doneTask,sIndex){
				var todoList=$scope.todos[sIndex].info;
				var info = {
					'title':doneTask.title,
					'note':doneTask.note
				};

				angular.element($element.children('li')[index]).fadeOut();

				$timeout(
					function(){
						$scope.doneTasks[sIndex].info.splice(index,1);
						todoList.push(info);
					},400);
			};

		}]
	);
