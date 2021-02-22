function subtract() {
    let fistNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber= Number( document.getElementById('secondNumber').value);

    document.getElementById('result').innerText = fistNumber - secondNumber;

}