function solve() {
    let text = (document.getElementById('text').value).toLowerCase().split(' ');
    const naming = (document.getElementById('naming-convention').value).toLowerCase().split(' ');

    function toCase(word) {
        let res = '';
        const fistLetter = word[0].toUpperCase();
        res += fistLetter;
        res += word.slice(1);
        return res;
    }

    let result = {
        camel(){
            let camelResult = '';
            camelResult+=text[0];
            for (let i = 1; i < text.length; i++){
                camelResult += toCase(text[i]);
            }
            return camelResult;
        },
        pascal () {
            let pascalResult = '';
            for (let i = 0; i < text.length; i++) {
                pascalResult += toCase(text[i]);
            }
            return pascalResult;
        }
    }

    if (naming[0] === 'camel' || naming[0] === 'pascal'){
        document.getElementById('result').textContent = result[naming[0]]();
    } else {
        document.getElementById('result').textContent = 'Error!';
    }

}