function argumentInfo() {
    let result = [];
    let count = {};

    [...arguments].forEach(arg => {
        let type = typeof arg;
        result.push({ type, value: arg });

        if (!count[type]) {
            count[type] = 0;
        }
        count[type]++;
    });

    result.forEach(r => console.log(`${r.type}: ${r.value}`));
    let sort = Object.entries(count).sort((a, b) => b[1] - a[1]);
    sort.forEach(s => console.log(`${s[0]} = ${s[1]}`))
}

// function argumentInfo() {
// let input = [];
// let repeatType = {};
// let result = [];

// [...agrgumets].forEach(token => {
//     let type = typeof token;
//     input.push(type);
//     result.push(`${type}: ${token}`);
// })

// let count = 0;
// for (const t of input) {
//     let type = t;

//     for (const tp of input) {
//         if(tp === type){
//             count++;
//         }
//     }
//     repeatType[type] = count;
//     count = 0;
// }

// for (const [key, value] of Object.entries(repeatType)) {
//     result.push(`${key}: ${value}`);
// }

// return result;
// }