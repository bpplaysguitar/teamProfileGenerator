const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

function employee(data) {
  let newEmployee;
  let additionalMethod;
  let employeeType = data.role;

  switch (employeeType) {
      case 'Manager':
          newEmployee = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
          additionalMethod = newEmployee.getOfficeNumber();
          break;
      case 'Engineer':
          newEmployee = new Engineer(data.name, data.id, data.email, data.github);
          additionalMethod = newEmployee.getGithub();
          break;
      case 'Intern':
          newEmployee = new Intern(data.name, data.id, data.email, data.school);
          additionalMethod = newEmployee.getSchool();
          break;
  }

  let currentEmployee = 
`            <div class="card m-5">
              <div class="card-heading has-text-white">
                  <h2>${newEmployee.getName()}</h2>
                  <p>
                  <i class="fas fa-mug-hot"></i>
                  ${newEmployee.getRole()}
                  </p>
              </div>
              <ul>
                  <li>
                      ID: ${newEmployee.getId()}
                  </li>
                  <li>
                      Email: ${newEmployee.getEmail()}
                  </li>
                  <li>
                      ${additionalMethod}
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
