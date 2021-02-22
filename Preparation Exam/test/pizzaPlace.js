const assert = require('chai').assert;
const pizzUni = require('../pizza').pizzUni;

describe('Test pizzUni', () => {
    describe('Method makeAnOrder', () => {
        it('Make an order without pizza should throw ERROR', () => {
            const obj = {orderedPizza: undefined, orderedDrink: undefined}
            assert.throw(() => {
                pizzUni.makeAnOrder(obj)
            }, 'You must order at least 1 Pizza to finish the order.')
        });
        it('Make an order with pizza but without drink', () => {
            const obj = {orderedPizza: 'caprichoza', orderedDrink: undefined}
            assert.equal(pizzUni.makeAnOrder(obj), 'You just ordered caprichoza');
        });
        it('Make an order with pizza and drink', () => {
            const obj = {orderedPizza: 'caprichoza', orderedDrink: 'coca cola'}
            assert.equal(pizzUni.makeAnOrder(obj), 'You just ordered caprichoza and coca cola.');
        });
    });
    describe('Method getRemainingWork', () => {
        it('All orders are complete should return the same string ', () => {
            assert.equal(pizzUni.getRemainingWork([{
                pizzaName: 'the boss',
                status: 'ready'
            }]), 'All orders are complete!');
        });
        it('Same orders are not complete should return preparing pizza name ', () => {
            assert.equal(pizzUni.getRemainingWork([{
                pizzaName: 'the boss',
                status: 'preparing'
            }]), 'The following pizzas are still preparing: the boss.');
        });
    });
    describe('Method orderType', () =>{
        it('Have got a discount', () => {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 90);
        });
        it('Have not a discount', () => {
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);
        });
    });
});