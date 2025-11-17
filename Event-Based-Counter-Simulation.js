let count = 0;

function increment() {
    count++; 
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    count--; 
    console.log(`Count after decrement: ${count}`);
}

function simulateClicks() {
    console.log("Simulating clicks:");
    increment();
    increment();
    decrement();
    console.log(`Final count in nested function: ${count}`);
}
simulateClicks();