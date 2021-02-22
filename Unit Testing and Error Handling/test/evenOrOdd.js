const assert  = require('chai').assert;
const isOddOrEven = require('../isOddOrEven.js').isOddOrEven;

describe('check isOddOrEven', () => {
    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), 'Message');
    });
    it('Is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', 'Message');
    });
    it('Is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd','Message');
    });
})