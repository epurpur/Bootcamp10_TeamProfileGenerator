//Imported modules
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./Assets/utils/Manager');


const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter manager name :',
            name: 'managerName',
        },
    ])
    .then((userInput) => {
        const managerName = userInput.managerName.split(" ");
        //create new manager instance from userInput
        const manager = new Manager(managerName[0], managerName[1]);

        inquirer.prompt([
            {
                type: 'input',
                message: 'Would you like to add a Salesperson or Intern to your team? :',
                name: 'managerDecision',
            },
        ])
        .then((userInput) => {
            
            //START HERE
            //evaluate whether manager wants to add person to team  (THIS SHOULD BE A FUNCTION)
            //if yes, inquire about salesperson or intern   (THESE SHOULD BE INDIVIDUAL FUNCTIONS)
        })
    })
}

createManager()

