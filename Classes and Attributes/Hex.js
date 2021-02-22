class Hex {
    constructor(value) {
        this.value = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        if (typeof number === 'number') {
            return new Hex(this.value + number);
        }
        return new Hex(this.value + number.value);
    }

    minus(number) {
        if (typeof number === 'number') {
            return new Hex(this.value - number);
        }
        return new Hex(this.value - number.value);
    }

    parse(string) {
        return parseInt(string);
    }
}