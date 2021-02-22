function sort(array) {
    let result = [...array];
    let finall = [];
    result.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < result.length; i++) {
        finall.push(i+1 + '.'+ result[i]);
    }
    return finall.join('\n');
}