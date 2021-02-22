function solve() {
    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');
    document.querySelector('div[class="modules"]').addEventListener('click', del);
    document.querySelector('button').addEventListener('click', add);

    let state = {};

    function add(ev) {

        ev.preventDefault();
        if (lecture.value === '' || date.value === '' || moduleName.value === 'Select module') {
            return;

        }
        let lectureName = lecture.value;
        let dateString = date.value;

        let lectureTitle = `${lectureName} - ${dateString.split('-').join('/').split('T').join(' - ')}`;
        const delBtn = createElement('button', 'Del', ['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);

        const li = createElement('li', undefined, ['class=flex']);
        li.appendChild(lectureH4);

        li.appendChild(delBtn);
        let module;

        let ul;
        if (!state[moduleName.value]){
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');

            module = createElement('div', undefined, ['class=module']);
            module.appendChild(h3);

            module.appendChild(ul);

            state[moduleName.value] = {module, ul, lis: []}
        } else {
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul;

        }

        state[moduleName.value].lis.push({li, date: date.value});
        state[moduleName.value].lis.sort(((a, b) => a.date.localeCompare(b.date))).forEach(({li})=>{
            ul.appendChild(li);

        });
        modulesOutput.appendChild(module);
    }

    function del(ev) {
        const module = ev.target.parentNode.parentNode;
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
        if (!module.children.length) {
            module.parentNode.remove();
        }

    }

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(a => a.split('=')).forEach(([name, value]) => {
            element.setAttribute(name, value);

        });
        return element;

    }
}