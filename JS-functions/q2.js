
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

const numbers = [1, 2, 3, 4];

console.log("Original array:", numbers);
console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));