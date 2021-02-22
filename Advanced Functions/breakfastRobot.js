function solution() {

    const stock = {
        protein: 0,
        carbohydrate: 0,
        flavour: 0,
        fat: 0
    }

    const ingredients = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const command = {
        restock: (element, value) => {
            stock[element] += Number(value);
            return 'Success';
        },
        prepare: (element, value) => {
            const meal = ingredients[element];

            for (const [k, v] of Object.entries(meal)) {
                const needed = v * Number(value);
                if (needed > stock[k]) {
                    return `Error: not enough ${k} in stock`;

                }
            }

            for (const [k, v] of Object.entries(meal)) {
                stock[k] -= Number(value) * v;
            }

            return 'Success';

        },
        report: () => {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    }
    return (line) => {
        const [comm, element, value] = line.split(' ');
        if (!element) {
            return   command[comm]();
        } else {
            return   command[comm](element, value);
        }
    }
}
