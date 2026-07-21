let nums = 28;
let sums = 0;

for (let i = 1; i < nums; i++) {
    if (nums % i == 0)
        sums += i;
}

if (sums == nums)
    console.log("Perfect Number");
else
    console.log("Not Perfect");