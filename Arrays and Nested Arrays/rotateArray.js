function rotateArray(array, rotate){
    let result = [...array];
    while(rotate--) {
        let number = result.pop();
        result.unshift(number);
    }

    return result.join(' ');
}