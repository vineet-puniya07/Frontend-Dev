const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;
cart.forEach(item => {
    let discount = 0;
    if (item.category === "electronics") {
        discount = 0.10;
    } else if (item.category === "fashion") {
        discount = 0.05;
    }
    let discountedPrice = item.price * (1 - discount);
    total += discountedPrice;
    console.log(`${item.item}: Original ${item.price}, Discounted ${discountedPrice.toFixed(2)}`);
});

if (total > 50000) {
    total *= 0.95; 
    console.log("Extra 5% discount applied for total > 50000");
}

console.log(`Final Total: ${total.toFixed(2)}`);