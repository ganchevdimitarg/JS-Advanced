function solve() {
    let sentences = document.getElementById('input').value.split('. ');

    let result = [];
    while (sentences.length) {
        let first = sentences.shift();
        let second = sentences.shift();
        let third = sentences.shift();
        if (first !== undefined && second === undefined && third === undefined) {
            result.push('<p>' + first + '</p>');
        } else if (first !== undefined && second !== undefined && third === undefined) {
            result.push('<p>' + first + second + '</p>');
        } else {
            result.push('<p>' + first + second + third + '</p>');
        }
    }

    document.getElementById('output').innerHTML = result.join(' ');

}