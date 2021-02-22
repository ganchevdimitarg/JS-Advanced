function sameNumber(number){
    let numbers = Array.from(String(number), Number);
    let bln = true;
    let result = 0;

    for (let index = 0; index < numbers.length; index++) {
        result += numbers[index];

        if(bln != false){
            if(index != numbers.length - 1 && numbers[index] != numbers[index + 1]){
                bln = false;
            }
        }
    }

    console.log(bln);
    console.log(result);
}