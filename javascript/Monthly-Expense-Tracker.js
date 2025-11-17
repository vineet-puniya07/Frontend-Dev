let expenses = [5000, 2000, 10000, 3000, 1500];
let total = 0;

for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final after tax:", finalAmount.toFixed(2));
