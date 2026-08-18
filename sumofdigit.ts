let numss = 1234;
let sums = 0;

while (numss > 0) {
    sums += numss % 10;
    numss = Math.floor(numss / 10);
}

console.log(sums);