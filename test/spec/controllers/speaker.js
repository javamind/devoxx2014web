'use strict';

describe('Controller: SpeakerCtrl', function () {

  // load the controller's module
  beforeEach(module('devoxxwebApp'));

  var SpeakerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeakerCtrl = $controller('SpeakerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
