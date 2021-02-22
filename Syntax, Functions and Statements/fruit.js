function fruits(fruit, weight, money){
    const weightKg = weight/1000;
    const neededMoney = weightKg * money;
    console.log('I need $' + neededMoney.toFixed(2) + ' to buy ' + weightKg.toFixed(2) + ' kilograms ' + fruit + '.');
}