//intern is a sub class of employee
const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, employeeID, email, school) {
    super(name, employeeID, email)
    this.school = school;
  }

}