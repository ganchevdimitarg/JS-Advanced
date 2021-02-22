function sortNumbers(array) {
    let result = [...array];
    let index = 1;
    result.sort((a, b) => a - b);

    for (let i = array.length - 1; i > array.length / 2; i--) {
        let num = result.pop();
        result.splice(index, 0, num);
        index += 2;
    }

    return result;
}