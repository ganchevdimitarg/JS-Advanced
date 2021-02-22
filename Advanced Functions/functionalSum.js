function add(number) {
    let result = 0;
    result += number;

    function calc(b){
        result += b;

        return calc
    }

    calc.toString = () => result;
    return calc;
}
