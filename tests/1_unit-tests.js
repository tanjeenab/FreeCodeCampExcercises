const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
 // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'This is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    }); 
    // #2
    test('#isDefined, #isUndefined', function () {
      assert.isDefined(null, 'null is not undefined');
      assert.isUndefined(undefined, 'undefined IS undefined');
      assert.isDefined('hello', 'A string is not undefined');
    }); //
    // #3
    test('#isOk, #isNotOk', function () {
      assert.isNotOk(null, 'null is falsey');
      assert.isOk("I'm truthy", 'A string is truthy');
      assert.isOk(true, 'true is truthy');
    });
    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true');
      assert.isTrue(!!'double negation', 'Double negation of a truthy value is true');
      assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });

  // -----------------------------------------------------------------------------

  suite('Equality', function () {
    // #5
    test('#equal, #notEqual', function () {
      assert.equal(12, '12', 'Numbers are coerced into strings with ==');
      assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
      assert.equal(6 * '2', '12');
      assert.notEqual(6 + '2', '12');
    });
    // #6
    test('#strictEqual, #notStrictEqual', function () {
      assert.notStrictEqual(6, '6');
      assert.strictEqual(6, 3 * 2);
      assert.strictEqual(6 * '2', 12);
      assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
    });
    // #7
    test('#deepEqual, #notDeepEqual', function () {
      assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
      assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, 'The order of array elements does matter');
    });
  });
});
});
