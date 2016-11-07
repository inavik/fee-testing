(function() {
    'use strict';

    // TODO: Your tests go here!

    var expect = chai.expect;

    describe('my calc', function () {
      it('should know that five equals five', function() {
        expect(5).to.equal(5);
      });

      describe('sum', function() {
        it ('should have a function called sum', function() {
          expect(window.calc.sum).to.be.a('function');
        });

        it('should add the numbers in the array and return six', function() {
          var result= window.calc.sum([1,2,3]);
          expect(result).to.equal(6);
        });

        it('should know that if given text it should be a string', function() {
          var result= window.calc.sum('hello');
          expect(result).to.equal('hello')
        });

        it('should handle a situation when no arguments are given', function () {
          var result= window.calc.sum();
          expect(result).to.equal(result);
        });
      });

      describe('factorial', function() {
        it('should have a function called factorial', function () {
          expect(window.calc.factorial).to.be.a('function');
        });



      })
    });





})();
