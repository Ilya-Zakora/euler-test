console.log("Time-start =>",Date.now())
function sum(number) {
    let sumNumbers = 0;
    for (let i = 0; i <= number; i++) {
        if ((i%3) || (i%5)) {
            sumNumbers += i; 
        }
        }
    return sumNumbers
}
console.log(sum(1000));
console.log("Time-end =>",Date.now());