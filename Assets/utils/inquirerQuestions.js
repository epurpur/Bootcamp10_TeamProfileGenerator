/**
 * These questions are used to populate inquirer questions in index.js module
 * I put them here in order to not clutter index.js
 */

exports.managerQuestion = {
    type: 'input',
    message: 'Enter manager name :',
    name: 'managerName',
}

exports.underlingQuestion = {
    type: 'list',
    name: 'underling',
    message: 'Choose an employee type to add to your team: ',
    choices: [
        'Manager',
        'Salesperson',
        'Intern',
        'None'
    ],
}

exports.salespersonQuestions = [
    {
        type: 'input',
        name: 'salespersonName',
        message: 'Enter Salesperson Name: '
    },
    {
        type: 'input',
        name: 'salespersonGithub',
        message: 'Enter Salesperson Github username: '
    }
]

exports.internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter Intern Name: '
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter Intern School: '
    }
]