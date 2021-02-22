const assert  = require('chai').assert;
const {PaymentPackage} = require("../PaymentPackage");

describe('PaymentPackage', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new PaymentPackage('Name', 100);
    });
    it('constructor', () => {
        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    });
    it('name', () => {
        instance.name = 'Peter';

        assert.equal(instance.name, 'Peter');
        assert.throw(() => {
            instance.name = ''
        }, 'Name must be a non-empty string');
        assert.throw(() => {
            instance.name = 2
        }, 'Name must be a non-empty string');
    });
    it('value', () => {
        assert.equal(instance.value, 100);
        instance.value = 40;
        assert.throw(() => {instance.value = -1}, 'Value must be a non-negative number');
        assert.throw(() => {instance.value = '2'}, 'Value must be a non-negative number');
        assert.doesNotThrow(() => {instance.value = 0});
    });
    it('VAT', () => {
        assert.equal(instance.VAT, 20);
        instance.VAT = 40;
        assert.throw(() => {
            instance.VAT = -1
        }, 'VAT must be a non-negative number');
        assert.throw(() => {
            instance.VAT = '2'
        }, 'VAT must be a non-negative number');
    });
    it('active', () => {
        assert.equal(instance.active, true);

        instance.active = false;
        assert.isFalse(instance.active);
        assert.throw(()=>{instance.active = 1}, 'Active status must be a boolean');
    });
    it('toString', () => {
        const output = [
            `Package: Name`,
            `- Value (excl. VAT): 100`,
            `- Value (VAT ${20}%): ${100 * (1 + 20 / 100)}`
        ].join('\n');

        function getString(name, value, VAT = 20, active = true){
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }
        assert.equal(instance.toString(), getString('Name', 100));
        instance.active = false;
        assert.equal(instance.toString(), getString('Name', 100, 20, false));
        instance.VAT = 200;
        assert.equal(instance.toString(), getString('Name', 100, 200, false));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString('Gosho', 100, 200, false));
        instance.value = 2;
        assert.equal(instance.toString(), getString('Gosho', 2, 200, false));

    });
})