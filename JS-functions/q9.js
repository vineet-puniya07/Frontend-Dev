
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Alice", "Computer Science");

console.log("Student details:");
student.printName(); 
student.printBranch(); 