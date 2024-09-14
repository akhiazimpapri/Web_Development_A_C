function sum(num) {
    let summ = 0;
    for(let i = 1; i <= num; i++) {
        summ = summ + i;
    }
    return summ;
}

console.log(sum(100));