function cookingNumber(number, a, b, c, d, e) {
    let result;
    function operations(operation, nextNumber) {
        if (operation == 'chop') {
            result = nextNumber / 2;
            console.log(result);
        }
        if (operation == 'dice') {
            result = Math.sqrt(nextNumber);
            console.log(result);
        }
        if (operation == 'spice') {
            result = nextNumber + 1;
            console.log(result);
        }
        if (operation == 'bake') {
            result = nextNumber * 3;
            console.log(result);
        }
        if (operation == 'fillet') {
            result = nextNumber * 0.80;
            console.log((result).toFixed(1));
        }
    }
    operations(a, number);
    operations(b, result);
    operations(c, result);
    operations(d, result);
    operations(e, result);

}