'use strict';

describe('Controller: TodolistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('toDoListApp'));

  var TodolistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodolistctrlCtrl = $controller('TodolistctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
