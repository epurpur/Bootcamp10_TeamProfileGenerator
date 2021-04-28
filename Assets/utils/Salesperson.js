const Employee = require('./Employee')

class Salesperson extends Employee {
    constructor(name, email, github, id, title) {
        super(name, email, id)
        this.title = 'Salesperson';
        this.github = `github.com/${github}`;
    }

    //makes HTML for salesperson card
    makeHTML() {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body salesperson-card">
            <h5 class="card-title">Name: ${this.getName()}</h5>
            <p class="card-text">Title: ${this.title}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${this.id}</li>
            <li class="list-group-item">Email: ${this.email}</li>
            <li class="list-group-item">Github: ${this.github}</li>
        </ul>
        </div>`
    }
}

// const sal1 = new Salesperson('Dwight', 'Schrute', 'SchruteFarms')
// console.log(sal1);

module.exports = Salesperson