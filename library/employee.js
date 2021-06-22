// employee is the super class
class Employee {
  constructor(name, employeeID, email) {
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
  }

  printInfo() {
    console.log(`Area: ${this.name}`);
    console.log(`Perimeter: ${this.employeeID}`);
    console.log(`Perimeter: ${this.email}`);
  }
}

module.exports = Employee;