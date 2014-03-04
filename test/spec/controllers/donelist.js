'use strict';

describe('Controller: DonelistCtrl', function () {

  // load the controller's module
  beforeEach(module('toDoListApp'));

  var DonelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonelistCtrl = $controller('DonelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
