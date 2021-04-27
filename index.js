//Imported modules
const inquirer = require('inquirer');
const fs = require('fs');

const inquirerQuestions = require('./Assets/utils/inquirerQuestions.js')
const Manager = require('./Assets/utils/Manager');
const Salesperson = require('./Assets/utils/Salesperson');
const Intern = require('./Assets/utils/Intern')


const createManager = () => {
//Creates manager for team using user input

    inquirer.prompt(inquirerQuestions.managerQuestion)  //asks user for manager name

    .then((userInput) => {
        const managerName = userInput.managerName.split(" ");
        //create new manager instance from userInput
        const manager = new Manager(managerName[0], managerName[1]);
        //TODO: WRITE MANAGER HTML

    })
}


const createUnderling = () => {
//prompts user to add underlings (salespeople and interns) to team

    inquirer.prompt(inquirerQuestions.underlingQuestion)  // asks if user wants to add salesperson or intern
    
    .then((userInput) => {
        const underling = userInput.underling;

        switch(underling) {
            case 'Salesperson':
                inquirer.prompt(inquirerQuestions.salespersonQuestions)  // asks user to input info about salesperson
                .then((userInput) => {
                    //create instance of Salesperson class
                    const salespersonName = userInput.salespersonName.split(" ");
                    const salesperson = new Salesperson(salespersonName[0], salespersonName[1], userInput.salespersonGithub);
                    
                    console.log("\n Creating Salesperson... \n", salesperson, "\n");
                    
                    //TODO: write salesperson HTML

                    createUnderling();           //run function again to ask if user wants another team member
                });
                break;
            case 'Intern':
                inquirer.prompt(inquirerQuestions.internQuestions)   //asks user to input info about intern
                .then((userInput) => {
                    //create instance of Intern class
                    const internName = userInput.internName.split(" ");
                    const intern = new Intern(internName[0], internName[1], userInput.internSchool);
                    
                    console.log("\n Creating Intern... \n", intern, "\n");
                    
                    //TODO: write intern HTML

                    createUnderling();           //run function again to ask if user wants another team member
                })
                break;
            case 'None':
                break;                  //user doesn't want any more team members, exit loop
        }
    })
}

// createManager();
createUnderling();

//TODO: DELETE HTML OF PREVIOUS EMPLOYEES FROM INDEX.HTML WHEN STARTING UP

