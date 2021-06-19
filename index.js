// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
      [
        {
          type: 'input',
          message: 'Please enter team manager name.',
          name: 'managerName'
        },
        {
          type: 'input',
          message: 'Please enter team manager employee ID.',
          name: 'managerID'
        },
        {
          type: 'input',
          message: 'Please enter team manager email address.',
          name: 'managerEmail'
        },
        {
          type: 'input',
          message: 'Please enter team manager office number.',
          name: 'managerOffice'
        },
        {
          type: 'list',
          message: 'Team manager added. What would you like to do next?',
          choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
          name: 'whatNext'
        },
        
      ]
    )
      .then((response) => writeFileAsync('./demo/index.html', generateHTML(response)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
      }

// Function call to initialize app
init();
