let bonus = 5000; 

function calculateSalary(isPermanent) {
    let salary = 40000; 
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus; 
    }
    
    console.log(`Total Salary: ${totalSalary}`);    
}

console.log("Testing with isPermanent = true:");
calculateSalary(true);

console.log("Testing with isPermanent = false:");
calculateSalary(false); 

console.log(`Global bonus remains: ${bonus}`);