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
					}
				]
			}
		];

		$scope.doneTasks=[
			{
				'topic': 'simple to do',
				'info':[]
			}
		];

		$scope.selectedIndex = 0;
		$scope.editing=false;
		$scope.removingList =[];
		

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

		$scope.addRemovingList = function(index){
			
			var removingArray =$scope.removingList;
			
			if(removingArray.indexOf(index) === -1){
				
				removingArray.push(index);
				
			}else{

				removingArray.splice(removingArray.indexOf(index),1);
				
			}
			
		};

		$scope.removeTopic = function(){
			
			var numOfList = angular.element($scope.removingList).length;
			var removedItem = 0;
			
			for(var num = 0; num<numOfList; num++){
			
				$scope.todos.splice($scope.removingList[num]-removedItem,1);
				$scope.doneTasks.splice($scope.removingList[num]-removedItem,1);
				removedItem++;
			
			}

			$scope.removingList=[];

			//this will show the first list of to-do list
			$scope.selectedIndex=0;

			//if all the lists were deleted, a new to do list will be added.
			if(angular.element($scope.todos).length===0){
			
				$scope.addTopic();
			
			}
		};
	}]
);
