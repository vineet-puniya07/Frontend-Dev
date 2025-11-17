"use strict";
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let clean = [];
let errors = [];

rawData.forEach((entry, index) => {
    try {
        let parsed = JSON.parse(entry);
        if (!parsed.user || !parsed.age) {
            throw new Error("Missing user or age");
        }
        parsed.age = Number(parsed.age);
        if (parsed.age >= 18) {
            clean.push(parsed);
        }
    } catch (error) {
        errors.push({ line: index + 1, entry, error: error.message });
    }
});

console.log("Valid entries:");
clean.forEach(item => console.log(item));

console.log("Errors:");
errors.forEach(err => console.log(`Line ${err.line}: ${err.entry} - ${err.error}`));
debugger;