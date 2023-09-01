function sum(params1, params2 = 5) {
    return params1 + params2;
}

// console.log(sum(1, NaN));

function totalSum(...params1) {
    // console.log(params1[1]);
    let sum = 0;
    params1.forEach(elem => {
        sum += elem;
    });
    return sum;
}

console.log(totalSum(1, 2, 3, 4));

