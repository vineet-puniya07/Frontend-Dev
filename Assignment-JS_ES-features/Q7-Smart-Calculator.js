"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}
for (let op of operations) {
    try {
        let result;
        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("Divide by zero");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) throw new Error("Root of negative");
                result = Math.sqrt(num1);
                break;
            default:
                throw new InvalidOperationError("Unrecognized operation");
        }
        console.log(`${op}: ${num1} ${op} ${num2} = ${result}`);
    } catch (error) {
        console.log(`${op}: Error - ${error.message}`);
    }
}