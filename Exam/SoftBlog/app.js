function solve() {
    const creator = document.getElementById('creator');
    const title = document.getElementById('title');
    const category = document.getElementById("category");
    const content = document.getElementById('content');
    const posts = document.querySelector('main section');
    const arhive = document.querySelector('ol');

    document.querySelector('form>button').addEventListener('click', add);
    posts.addEventListener('click', postBtns);

    function postBtns(ev) {
        if (ev.target.textContent === 'Delete' && ev.target.tagName === 'BUTTON') {
            ev.target.parentNode.parentNode.remove();
        }
        if (ev.target.textContent === 'Archive' && ev.target.tagName === 'BUTTON') {

            const title = ev.target.parentNode.parentNode.children[0].textContent;
            const li = document.createElement('li');
            li.textContent = title;

            arhive.appendChild(li);

            Array.from(arhive.children)
                .sort(((a, b) => a.textContent.localeCompare(b.textContent)))
                .forEach(p => arhive.appendChild(p));

            ev.target.parentNode.parentNode.remove();
        }
    }

    function add(ev) {
        ev.preventDefault();

        const delBtn = createElement('button', 'Delete', ['class=btn', 'class=delete']);
        const archBtn = createElement('button', 'Archive', ['class=btn', 'class=archive']);
        const div = createElement('div', undefined, ['class=buttons'], [delBtn, archBtn]);
        const area = createElement('p', content.value);
        const creatorEl = createElement('p', 'Creator: ', undefined, [createElement('strong', creator.value)]);
        const categoryEl = createElement('p', 'Category: ', undefined, [createElement('strong', category.value)]);
        const h1 = createElement('h1', title.value);
        const article = createElement('article', undefined, undefined, [h1, categoryEl,creatorEl, area, div]);

        posts.appendChild(article);

        creator.value = '';
        title.value = '';
        category.value = '';
        content.value = '';

    }

    function createElement(type, text, attr, children){
        const element = document.createElement(type);
        if (text){
            const content = document.createTextNode(text);
            element.appendChild(content);
        }
        if (attr){
            attr.forEach(a => {
                const [name, value] = a.split('=');
                if (name === 'class'){
                    element.classList.add(value);
                }else {
                    element.setAttribute(name, value);
                }
            });
        }
        if (children){
            children.forEach(c => {
               element.appendChild(c);
            });
        }
        return element;
    }
}
