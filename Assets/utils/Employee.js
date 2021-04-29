//this is the main class to contain all employees
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.email =  `${this.first + this.last}@dundermifflin.com`;
        this.id = Math.floor(Math.random() * 100);
        this.title = 'Employee';
    }

    getName() {
    //return concatenated first + last name
        return `${this.first} ${this.last}`;
    }

    getID() {
    //returns employee ID
        return `${this.id}`;
    }

    getEmail() {
    //returns employee email
        return `${this.email}`;
    }

    getRole() {
    //returns 'Employee'
        return `${this.title}`;
    }
}

// const emp1 = new Employee('Michael', 'Scott')
// console.log(emp1.getName())
// console.log(emp1.getRole())

module.exports = Employee