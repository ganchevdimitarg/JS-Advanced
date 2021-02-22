function magicMatrices(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[0][i];
    }

    for (let i = 1; i < matrix.length; i++) {
        let tokenSum = 0;
        for (let k = 0; k < matrix[i].length; k++) {
            tokenSum += matrix[i][k];
        }
        if (sum != tokenSum) {
            return false;
        }
    }
    const sum2 = (r, a) => r.map((b, i) => a[i] + b)
    let n = matrix.reduce(sum2);
    for (let i = 0; i < n.length; i++) {
        if(n[i] != sum){
            return false;
        }
    }

    return true;
}