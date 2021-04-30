//Imported modules
const inquirer = require('inquirer');
const fs = require('fs');

const inquirerQuestions = require('./Assets/utils/inquirerQuestions.js')
const Manager = require('./Assets/utils/Manager');
const Salesperson = require('./Assets/utils/Salesperson');
const Intern = require('./Assets/utils/Intern')


//array of strings of final HTML document
const teamArray = [
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>  <!-- Import bootstrap stylesheet -->
    <link rel="stylesheet" href="./Assets/css/style.css" />
    <title>Team Profile Generator</title>
  </head>

  <body>
    <main>

        <section id='header-section'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Team Profile Generator</h1>
                    <p class="lead">View info about your employees</p>
                </div>
            </div>
        </section>

        <section id='card-section'>`,
        
    //next item
    `        </section>

    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>   <!--Bootstrap js file-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> <!--Bootstrap js file-->
    <script src="script.js"></script>
  </body>
</html>`

]

//used as index number to insert cards into HTML string
let teamArrayCounter = 1;


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

                    //insert HTML into teamArray at position of teamArrayCounter
                    teamArray.splice(teamArrayCounter, 0, managerHTML);
                    teamArrayCounter++;

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

                    //insert HTML into teamArray at position of teamArrayCounter
                    teamArray.splice(teamArrayCounter, 0, salespersonHTML);
                    teamArrayCounter++;

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

                    //insert HTML into teamArray at position of teamArrayCounter
                    teamArray.splice(teamArrayCounter, 0, internHTML);
                    teamArrayCounter++;

                    //run function again
                    createEmployee();           
                })
                break;

            case 'None':
                //join together all elements of teamArray
                let finalHTML = teamArray.join()
                finalHTML = finalHTML.replace(/,/g,'');   //replace erroneous commas with nothing
                
                //user doesn't want any more team members
                //write final output to HTML file
                fs.writeFile('MyTeam.html', finalHTML, (error) =>
                error ? console.log('Error!') : console.log(`Output written to file: MyTeam.html`));  //error handling is a required argument
                break;                  
        }
    })
}


createEmployee();

