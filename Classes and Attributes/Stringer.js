class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;

    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            let string = this.innerString.substring(-1, this.innerLength);
            return string + '...';
        } else if (this.innerLength === 0) {
            return '...';
        }
        return this.innerString;
    }

    // toString() {
    //     return this.innerLength === 0 ? '...' : this.innerString.slice(0, this.innerLength) + '...';
    // }
}
