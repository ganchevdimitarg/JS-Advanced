function encodeAndDecodeMessages(){
    let textarea = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');
    document.getElementById('main').addEventListener('click', encriptDecript);

    const command = {
        encode: {
            btn:  buttons[0],
            text: textarea[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            btn:  buttons[1],
            text: textarea[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    function encriptDecript(ev){
        if (ev.target.tagName !== 'BUTTON'){
            return;
        }

        const type = ev.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';;

        const massege = command[type].text.value.split('').map(command[type].func).join('');

        command.encode.text.value = '';
        command.decode.text.value = massege;
    }
}