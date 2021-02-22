function sortTwoCriteria(array){
    let result = [...array];
    result.sort((a, b)=> a.localeCompare(b));
    result.sort((a, b) => a.length - b.length);

    return result.join('\n');
}