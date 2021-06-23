const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

function employee(data) {
  let newEmployee;
  let additionalMethod;
  let employeeType = data.role;
  let employeeIcon;

  switch (employeeType) {
      case 'Manager':
          newEmployee = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
          additionalMethod = newEmployee.getOfficeNumber();
          additionalLabel = "Office";
          employeeIcon = `<i class="fas fa-hand-holding-usd"></i>`;
          break;
      case 'Engineer':
          newEmployee = new Engineer(data.name, data.id, data.email, data.github);
          additionalMethod = newEmployee.getGithub();
          additionalLabel = "GitHub"
          employeeIcon = `<i class="fas fa-glasses"></i>`;
          break;
      case 'Intern':
          newEmployee = new Intern(data.name, data.id, data.email, data.school);
          additionalMethod = newEmployee.getSchool();
          additionalLabel = "School"
          employeeIcon = `<i class="fas fa-graduation-cap"></i>`;
          break;
  }

  let currentEmployee = 
`            <div class="card m-5">
              <div class="card-heading">
                  <h2>${newEmployee.getName()}</h2>
                  <p>
                  

                  ${employeeIcon}


                  ${newEmployee.getRole()}
                  </p>
              </div>
              <ul>
                  <li>
                      ID: ${newEmployee.getId()}
                  </li>
                  <li>
                      Email: <br> <a href = "mailto: ${newEmployee.getEmail()}">${newEmployee.getEmail()}</a>
                  </li>
                  <li>
                      ${additionalLabel}: ${additionalMethod}
                  </li>
              </ul>
          </div>`

  if (data.role === 'Manager') {
      return currentEmployee;
  } else {
      return `\n${currentEmployee}`;
  };
};

module.exports = {
  employee,
};
