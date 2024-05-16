const fibs = (number) => {
    const result = [];
    for (let i = 0; i < number; i++){
        if (i === 0) result.push(0);
        if (i === 1 || i === 2) result.push(1);
        if (i > 2) result.push(result[i-1] + result[i-2])
    }
    
    return result
}

const fibsRec = (number, result) => {
    if(result === undefined || !Array.isArray(result) || result.length === 0){
        result = [];
    } 
    if (number === 1) return result;

    const i = result.length;

    if (i === 0) result.push(0);
    if (i <= 2) result.push(1);
    if (i > 2) result.push(result[i-1] + result[i-2]);

    return fibsRec(number - 1, result);
}

console.log(fibs(8))
console.log(fibsRec(8))