const assert = require('chai').assert;
const dealership = require('../dealership').dealership;

describe('dealership', () => {
    it('test 1 ', function () {
        assert.equal(dealership.newCarCost('', 1), 1);
    });
    it('test 2', function () {
        assert.equal(dealership.newCarCost('Audi A6 4K', 40000), 20000);
    });
    it('test 3', function () {
        assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0]),['heated seats'])
    });
    it('test 4', function () {
        assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: ${14250}.`)
    });
    it('test 5', function () {
        assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: ${14250}.`)
    });
    it('test 6', function () {
        assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
    });
});