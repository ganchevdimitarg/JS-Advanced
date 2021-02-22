function sortArray(array, type) {
    if (type === 'asc') {
        return array.sort((a, b) =>a - b)
    } else {
        return array.sort((a, b) => b - a)
    }
}

// function sortArray(array, type) {
//     const fun = {
//         asc,
//         desc
//     }
//     return type === 'asc' ? fun.asc(array) : fun.desc(array);
//
//     function asc(array){
//         return array.sort((a, b) =>  a - b);
//     }
//     function desc(array){
//         return array.sort((a, b) => b - a);
//     }
// }