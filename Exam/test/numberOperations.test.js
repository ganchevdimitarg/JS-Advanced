const assert = require('chai').assert;
const numberOperations = require('../numberOperationsResources');

describe('Test numberOperations', () => {
    it('powNumber', () => {
        assert.equal(numberOperations.powNumber(2), 4);
        assert.equal(numberOperations.powNumber(1), 1);
        assert.equal(numberOperations.powNumber(-1), 1);
    });
    it('numberChecker', () => {
        assert.throw(() => {numberOperations.numberChecker(NaN)},'The input is not a number!');
        assert.throw(() => {numberOperations.numberChecker('NaN')},'The input is not a number!');
        assert.throw(() => {numberOperations.numberChecker(undefined)},'The input is not a number!');
        assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(500), 'The number is greater or equal to 100!');

    });
    it('sumArrays', () => {
        assert.deepEqual(numberOperations.sumArrays([1,2], [1,2,3]), [ 2, 4, 3 ]);
        assert.deepEqual(numberOperations.sumArrays([1,2, 3], [1,2]), [ 2, 4, 3 ]);
    });
});