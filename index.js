// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);

const managerPrompt = 
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
    name: 'managerWhatNext'
  }, 
];

const engineerPrompt = 
[
  {
    type: 'input',
    message: 'Please enter engineer name.',
    name: 'engineerName'
  },
  {
    type: 'input',
    message: 'Please enter engineer employee ID.',
    name: 'engineerID'
  },
  {
    type: 'input',
    message: 'Please enter engineer email address.',
    name: 'engineerEmail'
  },
  {
    type: 'input',
    message: 'Please enter engineer GitHub username.',
    name: 'engineerGithub'
  },
  {
    type: 'list',
    message: 'Engineer added. What would you like to do next?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    name: 'engineerWhatNext'
  }, 
];

const internPrompt = 
[
  {
    type: 'input',
    message: 'Please enter intern name.',
    name: 'internName'
  },
  {
    type: 'input',
    message: 'Please enter intern employee ID.',
    name: 'internID'
  },
  {
    type: 'input',
    message: 'Please enter intern email address.',
    name: 'internEmail'
  },
  {
    type: 'input',
    message: 'Please enter intern school.',
    name: 'internSchool'
  },
  {
    type: 'list',
    message: 'Intern added. What would you like to do next?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    name: 'internWhatNext'
  }, 
];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerPrompt)

      .then((response) => writeFileAsync('./demo/index.html', generateHTML(response)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
      }

// Function call to initialize app
init();
