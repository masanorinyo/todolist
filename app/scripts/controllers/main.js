'use strict';

angular.module('toDoListApp')
	.controller('MainCtrl', ['$scope',function ($scope){
		
		$scope.todos=[
			{
				'topic': 'Simple To Do',
				'info':[
					{
						'title': 'to do list 1',
						'note': 'test 1'
					},
					{
						'title': 'to do list 2',
						'note': 'test 2'
					},
					{
						'title': 'to do list 3',
						'note': 'test 3'
					}
				]
			},
			{
				'topic': 'Complex To Do',
				'info':[
					{
						'title': 'complex 1 ',
						'note': 'complex test 1'
					},
					{
						'title': 'complex 2',
						'note': 'complex test 2'
					}
				]
			}
		];

		$scope.doneTasks=[
			{
				'topic': 'simple to do',
				'info':[
					{
						'title': 'to do list 1',
						'note': 'test 1'
					},
					{
						'title': 'to do list 2',
						'note': 'test 2'
					},
					{
						'title': 'to do list 3',
						'note': 'test 3'
					}
				]
			},
			{
				'topic': 'complex to do',
				'info':[
					{
						'title': 'complex 1 ',
						'note': 'complex test 1'
					},
					{
						'title': 'complex 2',
						'note': 'complex test 2'
					}
				]
			}
		];

		$scope.selectedIndex = 0;
		$scope.editing=false;

		//this adds a new todo task
		$scope.addToDo = function(index){
		
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
				$scope.todos[index].info.unshift(newTask);

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
		$scope.removeToDo = function(index,sIndex){
			
			$scope.todos[sIndex].info.splice(index,1);

		};

		$scope.openModal=function(index){
			
			$scope.taskIndex = index;
		};

		$scope.selectedTopic = function(index){
			$scope.selectedIndex = index;
			$scope.editing=false;
		};

		$scope.addTopic = function(){
			var numOfTopics = angular.element($scope.todos).length;
			var newTitle = {
				'topic':'New To Do List',
				'info':[]
			};

			var doneList = {
				'topic':'New To Do List',
				'info':[]
			};

			$scope.selectedIndex = numOfTopics;
			$scope.todos.push(newTitle);
			$scope.doneTasks.push(doneList);
			
		};

		$scope.removeTopic = function(index){
			console.log(index);
			

		}

	}]
);
