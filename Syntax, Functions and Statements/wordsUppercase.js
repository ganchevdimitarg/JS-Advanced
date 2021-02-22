function wordsUppercase(token) {
    const words = token.split(/[''' ',.!?/\r/\n]+/);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === '') {
            words.splice(i, 1);
        }

    }
    let result = '';
    for (let index = 0; index < words.length; index++) {
        let r = words[index].toUpperCase();
        if (index === words.length - 1 || words.length === 1) {
            result += r;
        } else {
            result += r + ', ';
        }
    }
    console.log(result);
}