function calculator() {
    let fistNum;
    let secNum;
    let result;
    return {
        init: (selector1, selector2, resultSelector) => {
            fistNum = document.querySelector(selector1);
            secNum = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            result.value = Number(fistNum.value) + Number(secNum.value);
        },
        subtract: () => {
            result.value = Number(fistNum.value) - Number(secNum.value);
        }
    }
}