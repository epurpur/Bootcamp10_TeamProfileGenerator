const fs = require('fs');



const teamArray = [
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>  <!-- Import bootstrap stylesheet -->
        <link rel="stylesheet" href="./Assets/css/style.css" />
        <title>Work Day Scheduler</title>
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
            
    
        `        </section>
    
        </main>
    
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>   <!--Bootstrap js file-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> <!--Bootstrap js file-->
        <script src="script.js"></script>
      </body>
    </html>`
    
]
    
const moreToAdd = `
<div class="card" style="width: 18rem;">
<div class="card-body salesperson-card">
    <h5 class="card-title">Name: </h5>
    <p class="card-text">Title: </p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: </li>
    <li class="list-group-item">Email: </li>
    <li class="list-group-item">School: </li>
</ul>
</div>`


console.log(teamArray.length);

teamArray.splice(1, 0, moreToAdd);

console.log(teamArray);
console.log(teamArray.length)

const final = teamArray.join()

const writeToFile = (userInput) => {
    //write output to README.md file
    fs.writeFile('README.html', userInput, (error) =>
    error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
}

writeToFile(final);
