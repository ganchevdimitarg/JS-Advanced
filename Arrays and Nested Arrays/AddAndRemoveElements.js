function addRemoveElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add") {
            result.push(i + 1);
        } else if (result.length != 0 && arr[i] == "remove") {
            result.pop();
        }
    }
    if(result.length == 0){
        return 'Empty';
    }
    return result.join("\n");
}