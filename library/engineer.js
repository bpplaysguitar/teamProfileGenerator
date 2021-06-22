//engineer is a sub class of employee
const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, employeeID, email, github) {
    super(name, employeeID, email)
    this.github = github;
  }

}