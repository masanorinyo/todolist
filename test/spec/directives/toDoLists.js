'use strict';

describe('Directive: toDoLists', function () {

  // load the directive's module
  beforeEach(module('toDoListApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toDoLists></toDoLists>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toDoLists directive');
  }));
});
