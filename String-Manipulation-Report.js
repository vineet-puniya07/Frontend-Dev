let productName = " wireless headphones PRO ";

let trimmed = productName.trim();
console.log(`Trimmed: "${trimmed}"`);

let lowercased = trimmed.toLowerCase();
console.log(`Lowercased: "${lowercased}"`);

let words = lowercased.split(' '); 
let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); 
let titleCase = capitalized.join(' '); 
console.log(`Title Case: "${titleCase}"`);

let cleanedTitle = titleCase.replace('Pro', 'Pro Edition');
console.log(`Cleaned Title: "${cleanedTitle}"`);

let titleLength = cleanedTitle.length;
console.log(`Length: ${titleLength}`);