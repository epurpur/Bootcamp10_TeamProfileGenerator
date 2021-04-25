const Employee = require('./Employees')

class Intern extends Employee {
    constructor(name, email, id, title, school) {
        super(name, email, id)
        this.title = 'Intern';
        this.school = 'Lackawana College';
    }
}

const int1 = new Intern('Plop', 'Miller')
console.log(int1);