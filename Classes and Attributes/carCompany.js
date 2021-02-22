function carCompany(input) {
    let cars = new Map();
    let result = '';
    input.forEach(c => {
        let tokens = c.split(' | ');
        let brant = tokens[0];
        let model = tokens[1];
        let produced = Number(tokens[2]);

        if (!cars.has(brant)) {
            cars.set(brant, {[model]: produced});
        } else {
            if (cars.get(brant).hasOwnProperty(model)) {
                cars.get(brant)[model] = Number(cars.get(brant)[model]) + produced;
            } else {
                cars.get(brant)[model] = produced;
            }
        }
    });
    for (const [brant, models] of Array.from(cars)) {
        result+= `${brant}\n`;
        for (const [model, produced] of Object.entries(models)) {
            result+= `###${model} -> ${produced}\n`;
        }
    }


    return result;
}