//this is the main class to contain all employees
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.email =  `${this.first + this.last}@dundermifflin.com`;
        this.id = Math.floor(Math.random() * 100);
    }

    getName() {
    //return concatenated first + last name
        return `${this.first} ${this.last}`
    }

}

// const emp1 = new Employee('Michael', 'Scott')
// console.log(emp1.getName())

module.exports = Employee