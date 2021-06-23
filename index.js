// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/generateHTML')
const create = require('./src/generateEmployee');
let employeeData = ``;


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
    message: 'Continue adding team members or stop?',
    choices: ['Continue', 'Stop'],
    name: 'conStop'
  },
];

const employeePrompt = [
  {
      type: 'list',
      message: "Please select employee role.",
      choices: ['Engineer', 'Intern'],
      name: 'role',
  },
  {
      message: "Please enter employee name.",
      name: 'name',
  },
  {
      message: "Please enter employee ID.",
      name: 'id',
  },
  {
      message: "Please enter employee email address.",
      name: 'email',
  },
  {
      message: "Please enter employee GitHub username.",
      name: 'github',
      when(data) {
          return data.role === 'Engineer';
      },
  },
  {
      message: "Please enter employee school.",
      name: 'school',
      when(data) {
          return data.role === 'Intern';
      },
  },
  {
      type: 'confirm',
      message: "Employee added. Add another employee to the team?",
      name: 'askAgain',
  },
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerPrompt)
  .then((res) => {
    res.role = "Manager";
    employeeData += create.employee(res);
    if (res.conStop === 'Continue') {
      employeeFunction();
    } else {
      const fileName = "./dist/index.html"
      
      fs.writeFile(
        fileName,
        generate.HTML(employeeData),
        err => err ? console.error(err) : console.log("Team profiles successfully generated."));

    }



  })

}

      function employeeFunction() {
        inquirer.prompt(employeePrompt).then((res) => {
            if (res.askAgain) {
                employeeData += create.employee(res);
                employeeFunction();
            } else {
                employeeData += create.employee(res);
                const fileName = "./dist/index.html";
    
                fs.writeFile(
                    fileName,
                    generate.HTML(employeeData),
                    err => err ? console.error(err) : console.log("Team profiles successfully generated."));
            }
        })
    };


// Function call to initialize app
init();
