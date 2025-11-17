let salary = 30000;
let rate = 10;

let table = [];

for (let year = 1; year <= 5; year++) {
  salary += (salary * rate) / 100;
  table.push({ Year: year, Salary: Math.round(salary) });
}

console.table(table);
a
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ['+', '-', '*', '/'];
let op = operators[Math.floor(Math.random() * operators.length)];
let answer;

switch (op) {
  case '+': answer = num1 + num2; break;
  case '-': answer = num1 - num2; break;
  case '*': answer = num1 * num2; break;
  case '/': answer = (num1 / num2).toFixed(2); break;
}

console.log(`Question: ${num1} ${op} ${num2}`);
console.log("Answer:", answer);
