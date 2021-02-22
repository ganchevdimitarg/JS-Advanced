function storeCatalogue(input) {
    let dictionary = {};

    while(input.length){
        let [name, price] = input.shift().split(' : ');
        const fistLetter = name[0];

        if(!dictionary[fistLetter]){
            dictionary[fistLetter] = [];
        }

        dictionary[fistLetter].push({name, price: Number(price)});
        dictionary[fistLetter].sort((a,b)=> (a.name).localeCompare(b.name));
    }

    let result = [];
    Object.entries(dictionary).sort((a,b)=>a[0].localeCompare(b[0])).forEach(entry=>{
        let value = entry[1]
            .sort((a,b)=>(a.name).localeCompare(b.name))
            .map(product=> `  ${product.name}: ${product.price}`)
            .join('\n');

        let string = `${entry[0]}\n${value}`;
        result.push(string);
    });
    return result.join('\n');
}