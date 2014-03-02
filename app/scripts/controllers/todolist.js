'use strict';

angular.module('toDoListApp')
	.controller('ToDoListCtrl', function ($scope) {
		//this adds a new todo task
		$scope.addToDo = function(){
		
			$scope.errorFound=false;
			var toDoTitle = $scope.todo;
			var sameTitleFound = false;
			var errorBox = angular.element(document.querySelector('.errorMessage'));
			var toDoGenerator = document.getElementById('list-generator');
			var numOfChars = toDoGenerator.value.length;

			//this prevents users from adding an empty task
			if(numOfChars > 0){
			
				//this will find the same titled todo tasks
				//and change the state of 'sameTitleFound'			
				angular.forEach($scope.todos, function(value){
					if($scope.todo===value){
						sameTitleFound=true;
					}
				});

				//if the same titled todo task is found in the todos,
				//then an error message will appear.
				if(sameTitleFound){
					console.log('test');
				}else{
					$scope.todos.unshift(toDoTitle);
				}
			
				//clears the input after being submitted.
				$scope.todo='';
			
			}else{
				
				//this will show the error message.
				$scope.errorFound=true;
				var error = 'Please type something';
				errorBox.text(error);
				
			}
		};

		//this deletes a selected todo task
		$scope.removeToDo = function(index){
			$scope.todos.splice(index,1);
		};
	
		$scope.completed = function(){
			var completedTask = this;
			window.alert(completedTask);
		};

	});
