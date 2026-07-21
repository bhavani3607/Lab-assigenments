let ab = 145;
let temps = ab;
let s = 0;

while (temps > 0) {
    let digit = temps % 10;

    let fact = 1;
    for (let i = 1; i <= digit; i++)
        fact *= i;

    s += fact;
    temps = Math.floor(temps / 10);
}

if (s == ab)
    console.log("Strong Number");
else
    console.log("Not Strong");