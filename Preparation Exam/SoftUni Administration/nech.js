function solve() {
    const form = document.getElementsByTagName('form')[0];
    const name = document.querySelector('input[name="lecture-name"]');
    const date = document.querySelector('input[name="lecture-date"]');
    const module = document.querySelector('select[name="lecture-module"]');
    const addBtn = document.querySelector('form button');
    const modulesDiv = document.querySelector('.modules');
    const moduleList = Array.from(document.querySelectorAll('.module'));
    const listItems = Array.from(document.querySelectorAll('.flex'));

    addBtn.addEventListener('click', add);
    document.querySelector('div[class="modules"]').addEventListener('click', del);

    function add(ev){
        ev.preventDefault();
        if (!name.value || !date.value || module.children[0].selected) {
            return;
        }

        let selectedModule = '';
        module.forEach(m => {
            if (m.selected) {
                selectedModule = m.value;
            }
        });

        const div = document.createElement('div');
        div.className = 'module';
        const h3 = document.createElement('h3');
        h3.textContent = selectedModule;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.className = 'flex';
        const h4 = document.createElement('h4');
        const button = document.createElement('button');
        button.className = 'red';
        button.textContent = 'Del';

        let findModule = moduleList.filter(m => m.children[0].textContent === selectedModule);
        if (findModule){

        }
    }

    function del(ev) {
        const module = ev.target.parentNode.parentNode;
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
        if (!module.children.length) {
            module.parentNode.remove();
        }
    }
}