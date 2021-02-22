class ChristmasDinner {
    constructor(budget) {

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number')
        }
        this._budget = budget;
    }

    shopping(products) {
        let [type, price] = products;
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`;
    }

    recipes(recipes) {
        const name = recipes.recipeName;
        const products = recipes.productsList;

        products.forEach(product => {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push({name, products})
        return `${name} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(d => d.name === dish)) {
            throw new Error('We do not have this dish');
        }
        if (Object.keys(this.guests).includes(name)){
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let result = [];
        for (const [name, dish] of Object.entries(this.guests)) {
            const products = this.dishes.find(d => d.name === dish).products.join(', ');
            result.push(`${name} will eat ${dish}, which consists of ${products}`);
        }

        return result.join('\n');
    }
}