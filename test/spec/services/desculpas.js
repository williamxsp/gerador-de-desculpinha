'use strict';

describe('Service: desculpas', function () {

  // load the service's module
  beforeEach(module('geradorApp'));

  // instantiate service
  var desculpas;
  beforeEach(inject(function (_desculpas_) {
    desculpas = _desculpas_;
  }));

  it('should do something', function () {
    expect(!!desculpas).toBe(true);
  });

});
