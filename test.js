
const fs = require('fs');


let Astring = `<!DOCTYPE html>
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

        <section id='card-section'>,

        <div class="card" style="width: 18rem;">
            <div class="card-body manager-card">
                <h5 class="card-title">Name: Michael Scott</h5>
                <p class="card-text">Title: Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: 80</li>
                <li class="list-group-item">Email: MichaelScott@dundermifflin.com</li>
                <li class="list-group-item">Office #: 3</li>
            </ul>
            </div>
            
            ,
        <div class="card" style="width: 18rem;">
        <div class="card-body salesperson-card">
            <h5 class="card-title">Name: Jim Halpert</h5>
            <p class="card-text">Title: Salesperson</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: 7</li>
            <li class="list-group-item">Email: JimHalpert@dundermifflin.com</li>
            <li class="list-group-item">Github: github.com/bigTuna</li>
        </ul>
        </div>,
        <div class="card" style="width: 18rem;">
        <div class="card-body intern-card">
            <h5 class="card-title">Name: Ryan Howard</h5>
            <p class="card-text">Title: Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: 39</li>
            <li class="list-group-item">Email: RyanHoward@dundermifflin.com</li>
            <li class="list-group-item">School: Lackawana College</li>
        </ul>
        </div>,        </section>

    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>   <!--Bootstrap js file-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> <!--Bootstrap js file-->
    <script src="script.js"></script>
  </body>
</html>`

Astring = Astring.replace(/,/g, ' ');

fs.writeFile('MyTeam2.html', Astring, (error) =>
error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
