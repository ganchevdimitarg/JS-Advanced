function increasingSubsequence(array) {
    let result = [];
    let biggestOne = array[0];
    result.push(biggestOne);
    for (let i = 1; i < array.length; i++) {
        if (biggestOne <= array[i]) {
            biggestOne = array[i];
            result.push(biggestOne);
        }
    }

    return result;
}