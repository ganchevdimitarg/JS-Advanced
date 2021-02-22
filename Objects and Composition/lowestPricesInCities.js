function lowestPricesCities(array) {
    let log = {};
    while (array.length) {
        let sale = array.shift();
        let [town, product, price] = sale.split(' | ');

        if (!log[product]) {
            log[product] = { town, price: Number(price) }
        } else {
            log[product] = log[product].price <= Number(price) ? log[product] : { town, price: Number(price) };
        }
    }

    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`)
    }

    return result.join('\n');
}