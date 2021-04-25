//this is the main class to contain all employees
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.email =  `${this.first + this.last}@dundermifflin.com`;
        this.id = Math.floor(Math.random() * 100);
    }

    generateHTML() {
        //this will generate HTML needed for employee card
    }
}

const emp1 = new Employee('Michael', 'Scott')
console.log(emp1)

//this is a child class called Manager, which is a child of employee
class Manager extends Employee {
    constructor(name, email, id, title, officeNumber) {
        super(name, email, id)
        this.title = 'Manager';
        this.officeNumber = Math.floor(Math.random() * 10);
    }
}

const man1 = new Manager('Dwight', 'Schrute', 'Manager')
console.log(man1);

module.exports = Employee;