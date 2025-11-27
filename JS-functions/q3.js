const user = {
    name: "John",
    showName: () => {
        console.log(this.name); 
    }
};

console.log("Using arrow function:");
user.showName();

const userFixed = {
    name: "John",
    showName: function() {
        console.log(this.name);
    }
};
console.log("Using normal function:");
userFixed.showName();
