const Employee = require('./Employee')

//this is a child class called Manager, which is a child of employee
class Manager extends Employee {
    constructor(name, email, id, title, officeNumber) {
        super(name, email, id)
        this.title = 'Manager';

    }

    getRole() {
        //gets role of 'Manager'
        return this.title;
    }

    getOffice() {
        //gets office number of manager
        return this.officeNumber;
    }

    //makes HTML for manager card
    makeHTML() {
        return `

        <div class="card" style="width: 18rem;">
            <div class="card-body manager-card">
                <h5 class="card-title">Name: ${this.getName()}</h5>
                <p class="card-text">Title: ${this.title}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office #: ${this.officeNumber}</li>
            </ul>
            </div>
            
            `
    }
}


// const man1 = new Manager('Dwight', 'Schrute')
// console.log(man1);

module.exports = Manager