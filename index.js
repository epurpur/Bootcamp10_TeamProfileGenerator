//Imported modules
const inquirer = require('inquirer');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const inquirerQuestions = require('./Assets/utils/inquirerQuestions.js')
const Manager = require('./Assets/utils/Manager');
const Salesperson = require('./Assets/utils/Salesperson');
const Intern = require('./Assets/utils/Intern')




const teamArray = [//this will be an array of strings]
//take objects in array and assemble them into a template literal which will be written to an HTML document


const createEmployee = () => {
//prompts user to add underlings (salespeople and interns) to team

    inquirer.prompt(inquirerQuestions.underlingQuestion)  // asks if user wants to add salesperson or intern
    
    .then((userInput) => {
        const underling = userInput.underling;

        switch(underling) {
            case 'Manager':
                inquirer.prompt(inquirerQuestions.managerQuestion)

                .then((userInput) => {
                    const managerName = userInput.managerName.split(" ");
                    
                    //create new manager instance from userInput
                    const manager = new Manager(managerName[0], managerName[1]);
                    
                    console.log("\n Creating Manager... \n", manager, "\n");

                    //make manager HTML
                    const managerHTML = manager.makeHTML();

                    //run function again
                    createEmployee();
                });
                break; 

            case 'Salesperson':
                inquirer.prompt(inquirerQuestions.salespersonQuestions)  // asks user to input info about salesperson

                .then((userInput) => {
                    //create instance of Salesperson class
                    const salespersonName = userInput.salespersonName.split(" ");
                    const salesperson = new Salesperson(salespersonName[0], salespersonName[1], userInput.salespersonGithub);
                    
                    console.log("\n Creating Salesperson... \n", salesperson, "\n");
                    
                    //make salesperson HTML
                    const salespersonHTML = salesperson.makeHTML();

                    //run function again
                    createEmployee();           //run function again to ask if user wants another team member
                });
                break;

            case 'Intern':
                inquirer.prompt(inquirerQuestions.internQuestions)   //asks user to input info about intern
                
                .then((userInput) => {
                    //create instance of Intern class
                    const internName = userInput.internName.split(" ");
                    const intern = new Intern(internName[0], internName[1], userInput.internSchool);
                    
                    console.log("\n Creating Intern... \n", intern, "\n");
                    
                    //make intern HTML
                    const internHTML = intern.makeHTML();

                    //run function again
                    createEmployee();           
                })
                break;

            case 'None':
                //user doesn't want any more team members, exit loop
                break;                  
        }
    })
}

createEmployee();






