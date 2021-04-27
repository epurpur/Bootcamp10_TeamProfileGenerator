const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, school, id, title) {
        super(name, email, id)
        this.title = 'Intern';
        this.school = school;
    }
}

// const int1 = new Intern('Plop', 'Miller')
// console.log(int1);

module.exports = Intern