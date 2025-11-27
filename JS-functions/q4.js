function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");
console.log("Car 1 details:");
car1.getDetails();

console.log("Car 2 details:");
car2.getDetails();