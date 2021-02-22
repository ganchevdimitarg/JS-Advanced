function solution() {
    const giftName = document.querySelector('input');
    const ul = document.querySelectorAll('ul');

    document.querySelector('.container').addEventListener('click', btn);

    const status  = [];

    function btn(ev) {
        if (ev.target.textContent === 'Add gift'){
            addGits();
        }
        if (ev.target.textContent === 'Send'){
            sendGift(ev);
        }
        if (ev.target.textContent === 'Discard'){
            discardGift(ev);
        }
    }

    function addGits(){
        const sendBtn = createElement('button', 'Send', ['id=sendButton']);
        const discardBtn = createElement('button', 'Discard', ['id=discardButton']);
        const li = createElement('li', giftName.value);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        status.push({name:giftName.value, lis: li});

        status.sort(((a, b) => a.name.localeCompare(b.name)));

        status.forEach(l => ul[0].appendChild(l.lis));

        giftName.value = '';
    }

    function sendGift(ev){
        const li = ev.target.parentNode;
        li.children.sendButton.remove();
        li.children.discardButton.remove();

        ul[1].appendChild(createElement('li', li.textContent, ['class=gift']));
        li.remove();
        const index = status.findIndex(l => l.name === li.textContent);
        status.splice(index);
    }

    function discardGift(ev){
        const li = ev.target.parentNode;
        li.children.sendButton.remove();
        li.children.discardButton.remove();

        ul[2].appendChild(createElement('li', li.textContent, ['class=gift']));
        li.remove();
        const index = status.findIndex(l => l.name === li.textContent);
        status.splice(index);
    }

    function createElement(type, text, attr){
        const element = document.createElement(type);
        if (text){
            element.textContent = text;
        }
        if (attr){
            attr.forEach(a => {
                const [name, value] = a.split('=');
                element.setAttribute(name, value);
            });
        }
        return element;
    }

}

