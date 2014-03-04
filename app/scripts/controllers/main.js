'use strict';

angular.module('toDoListApp')
	.controller('MainCtrl', ['$scope',function ($scope){
	
	$scope.todos = [
			{
				'title':'to do 1',
				'note':'any thought?'
			},
			{
				'title':'to do 2',
				'note':'another thought?'
			},
			{
				'title':'to do 3',
				'note':'any other thought?'
			},
		];

	$scope.doneTasks = [
			{
				'title':'list 4',
				'note':''
			},
			{
				'title':'list 5',
				'note':''
			},
			{
				'title':'list 6',
				'note':''
			}
		];

	//this adds a new todo task
	$scope.addToDo = function(){
	
		$scope.errorFound=false;
		var toDoTitle = $scope.todo;
		
		var errorBox = angular.element(document.querySelector('.errorMessage'));
		
		//this refers to the text type input which creates a new to do task.
		var toDoGenerator = document.getElementById('list-generator');
		
		//this gets the number of characters used in the newly created task.
		var numOfChars = toDoGenerator.value.length;

		//this prevents users from adding an empty task
		if(numOfChars > 0){
		
			//create a new object and add it to the todo list.
			var newTask = {'title':toDoTitle,'note':''};
			$scope.todos.unshift(newTask);

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

	$scope.openModal=function(index){
		$scope.taskIndex = index;
	};

	//this saves the changes made in the modal box
	$scope.saveChanges = function(){
		
	};
	
}]);
