"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumeric = [];
let invalidData = [];

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log(`Value: ${value}`);
    console.log(`  As Number: ${num}`);
    console.log(`  As Boolean: ${bool}`);
    console.log(`  As String: ${str}`);

    if (!isNaN(num) && num !== null && value !== " " && value !== "100px" && value !== "NaN") {
        validNumeric.push(num);
    } else {
        invalidData.push(value);
    }
    console.log("---");
}

console.log("Valid Numeric Data:");
for (let num of validNumeric) {
    console.log(`  ${num}`);
}

console.log("Invalid Data:");
for (let inv of invalidData) {
    console.log(`  ${inv}`);
}