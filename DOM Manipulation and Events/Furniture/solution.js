function solve() {
    let textarea = document.querySelectorAll('textarea');
    let btns = document.querySelectorAll('button');
    let tbody = document.querySelector('tbody');

    btns[0].addEventListener('click', function (ev) {
        let arr = JSON.parse(textarea[0].value);

        function createElement(type, content, attribute) {
            const cell = document.createElement('td');
            const tag = document.createElement(type);
            if (attribute) {
                tag.setAttribute(attribute[0], attribute[1]);
            }
            tag.textContent = content;
            cell.appendChild(tag);

            return cell;
        }


        for (let el of arr) {
            const row = document.createElement('tr');

            row.appendChild(createElement('img', '',['src', el.img]));
            row.appendChild(createElement('p', el.name));
            row.appendChild(createElement('p', el.price));
            row.appendChild(createElement('p', el.decFactor));
            row.appendChild(createElement( 'input','',  ['type', 'checkbox']));

            tbody.appendChild(row);
        }
    });

    btns[1].addEventListener('click', function (ev) {
        const furniture = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked'))
            .map(input => input.parentNode.parentNode);

        const result = furniture.reduce((result, row) => {
            let cells = row.children;

            let name = cells[1].children[0].textContent;
            result.bought.push(name);

            let price = Number(cells[2].children[0].textContent);
            result.totalPrice += price

            let factor = Number(cells[3].children[0].textContent);
            result.decFactorSum += factor;
        }, {
            bought: [],
            totalPrice: 0,
            decFactorSum: 0
        });

        textarea[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${(result.totalPrice).toFixed(2)}\nAverage decoration factor: ${(result.decFactorSum / furniture.length)}`
    });
}

// function solve() {
//     const [input, output] = [...document.querySelectorAll('textarea')];
//     const table = document.querySelector('table.table tbody');
//     const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];
//
//     const furniture = [];
//
//     generateBtn.addEventListener('click', () => {
//         const furnitureArray = JSON.parse(input.value.trim());
//         table.innerHTML = '';
//         furnitureArray.forEach(f => {
//             const item = createRow(f);
//             furniture.push(item);
//             table.appendChild(item.element);
//         });
//     });
//
//     buyBtn.addEventListener('click', () => {
//         furniture.forEach(f => console.log(f.getValues().name, f.isChecked()));
//
//     });
//
//     const td = e.bind(null, 'td');
//
//     function createRow(data) {
//         const img = e('img');
//         img.src = data.img;
//
//         const check = e('input');
//         check.type = 'checkbox';
//
//         const element = e('tr',
//             td(img),
//             td(e('p', data.name)),
//             td(e('p', data.price)),
//             td(e('p', data.decFactor)),
//             td(check)
//         );
//
//         return {
//             element,
//             isChecked,
//             getValues
//         };
//
//         function isChecked() {
//             return check.checked;
//         }
//
//         function getValues() {
//             return data;
//         }
//     }
//
//     function e(type, ...content) {
//         const result = document.createElement(type);
//
//         content.forEach(e => {
//             if (typeof e == 'string') {
//                 const node = document.createTextNode(e);
//                 result.appendChild(node);
//             } else {
//                 result.appendChild(e);
//             }
//         });
//
//         return result;
//     }
// }