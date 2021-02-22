const expect = require('chai').expect;
const mathEnforcer = require('../mathEnforcer.js').mathEnforcer;

describe('looking for a char in given index', () => {
    describe('addFive', () => {
        it('addFive param is not a number', () => {
            expect(mathEnforcer.addFive('number')).to.be.undefined;
        });

        it('subtractTen param is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });
        it('addFive param is a number', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('addFive param is a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('addFive param is a floating-point number', () => {
            expect(mathEnforcer.addFive(0.5)).to.be.equal(5.5);
        });
    });

    describe('subtractTen', () => {
        it('subtractTen param is not a number', () => {
            expect(mathEnforcer.subtractTen('ten')).to.be.undefined;
        });
        it('subtractTen param is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });
        it('subtractTen param is a number', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        });
        it('subtractTen param is a negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it('subtractTen param is a floating-point number', () => {
            expect(mathEnforcer.subtractTen(10.01)).to.be.equal(0.009999999999999787);
        });
    });

    describe('sum', () => {
        it('sum first param is not a number', () => {
            expect(mathEnforcer.sum('number', 20)).to.be.undefined;
        });
        it('sum second param is not a number', () => {
            expect(mathEnforcer.sum(1, '')).to.be.undefined;
        });
        it('sum params are numbers', () => {
            expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
        });
        it('sum params is a negative numbers', () => {
            expect(mathEnforcer.sum(-10, -10)).to.be.equal(-20);
        });
        it('sum first param is a negative number', () => {
            expect(mathEnforcer.sum(10, -10)).to.be.equal(0);
        });
        it('sum first param is a floating-point number', () => {
            expect(mathEnforcer.sum(0.1, 1)).to.be.equal(1.1);
        });
        it('sum params is a floating-point numbers', () => {
            expect(mathEnforcer.sum(0.1, 0.1)).to.be.equal(0.2);
        });
        it('sum first param is a floating-point number and second is negative number', () => {
            expect(mathEnforcer.sum(0.1, -0.1)).to.be.equal(0);
        });
    });
});