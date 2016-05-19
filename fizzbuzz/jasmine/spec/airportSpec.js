'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('starts empty', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes to land', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

});
