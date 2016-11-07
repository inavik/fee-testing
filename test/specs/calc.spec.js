(function() {
    'use strict';

    // TODO: Your tests go here!

    var expect = chai.expect;

    describe('my calc', function () {
      it('should know that five equals five', function() {
        expect(5).to.equal(5);
      });

      describe('sum', function() {
        it('should add the numbers in the array and return six', function() {
          var result= window.calc.sum([1,2,3]);
          expect(result).to.equal(6);
        })
      });






    });





})();
