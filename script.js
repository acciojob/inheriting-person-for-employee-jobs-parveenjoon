// Person class definition
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method for Person class
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee class definition inheriting from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor with name and age
    this.jobTitle = jobTitle;
}

// Inherit Person prototype methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method for Employee class
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage:
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.greet(); // Output: Hello, my name is Bob, I am 30 years old.
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Do not change the code below
window.Person = Person;
window.Employee = Employee;
