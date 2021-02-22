function calorieObject(caloriesArray){
    let result = {};
    for (let i = 0; i < caloriesArray.length; i+=2) {
        result[caloriesArray[i]] = Number(caloriesArray[i+1]);
    }
    return result;
}