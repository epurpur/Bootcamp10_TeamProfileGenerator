const Employee = require('./Employee')

class Salesperson extends Employee {
    constructor(name, email, github, id, title) {
        super(name, email, id)
        this.title = 'Salesperson';
        this.github = `github.com/${github}`;
    }
}

// const sal1 = new Salesperson('Dwight', 'Schrute', 'SchruteFarms')
// console.log(sal1);

module.exports = Salesperson