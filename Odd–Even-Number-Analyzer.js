let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let results = [];

numbers.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        results.push("FizzBuzz");
    } else if (num % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
});

console.log("Results for 1-30:");
results.forEach((result, index) => {
    console.log(`${index + 1}: ${result}`);
});