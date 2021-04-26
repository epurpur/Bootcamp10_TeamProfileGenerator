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

    getName() {
        returns `${this.first} ${this.last}`
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }


}

// const emp1 = new Employee('Michael', 'Scott')


module.exports = Employee