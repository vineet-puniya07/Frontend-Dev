let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30); 
}
console.log(`Scores: ${scores}`);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

let passed = scores.filter(score => score >= 50).length;

console.log(`
Performance Summary:
- Highest Score: ${highest}
- Lowest Score: ${lowest}
- Average Score: ${average.toFixed(2)}
- Students Passed (>=50): ${passed}
`);