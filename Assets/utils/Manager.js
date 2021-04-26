const Employee = require('./Employee')

//this is a child class called Manager, which is a child of employee
class Manager extends Employee {
    constructor(name, email, id, title, officeNumber) {
        super(name, email, id)
        this.title = 'Manager';
        this.officeNumber = Math.floor(Math.random() * 10);
    }
}


// const man1 = new Manager('Dwight', 'Schrute')
// console.log(man1);

module.exports = Manager