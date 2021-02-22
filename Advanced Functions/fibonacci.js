function getFibonator(){
    let prevNumber = 0
    let number = 0
    return fibo;

    function fibo  () {
        if(number === 0){
            number++;
            return 1;
        }
        const result = prevNumber + number;
        prevNumber = number;
        number++;
        number = result;
        return result;
    };
}

// function getFibonator(){
//     let prevNumber = 1;
//     let number = 0;
//     let result = 0;
//     return fibo;
//
//     function fibo  () {
//         if(number === 0){
//             number++;
//             prevNumber = 0;
//             return 1;
//         }
//         result = prevNumber + number;
//         prevNumber = number;
//         number++;
//         number = result;
//
//         return result;
//     };
// }