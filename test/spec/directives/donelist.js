'use strict';

describe('Directive: DoneList', function () {

  // load the directive's module
  beforeEach(module('toDoListApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-done-list></-done-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the DoneList directive');
  }));
});
