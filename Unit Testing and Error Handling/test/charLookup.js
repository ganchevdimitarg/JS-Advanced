const expect  = require('chai').expect;
const lookupChar = require('../charLookup.js').lookupChar;

describe('looking for a char in given index', () => {
    it('first param is not of type string', () => {
        expect(lookupChar(1, 0)).to.be.undefined;
    });
    it('second param is with negative value', () => {
        expect(lookupChar('asda', -11)).to.be.equal('Incorrect index');
    });
    it('second param is not a incorrect value ', () => {
        expect(lookupChar('string', 2.1)).to.be.undefined;
    });
    it('all param is correct type but index is incorrect ', () => {
        expect(lookupChar('string', 10)).to.be.equal('Incorrect index');
    });
    it('all param is correct type but index is correct ', () => {
        expect(lookupChar('string', 1)).to.be.equal('t');
    });
});