const Employee = require('../lib/employee')

describe("Employee", () => {
  describe("name", () => {
    it("should return the employee's name", () => {
      const testValue = "Michael";
      const newEmployee = new Employee(testValue, "01", "michael@bluthbananas.com");

      expect(newEmployee.name).toEqual(testValue);
    });
  });

  describe("id", () => {
    it("should return the employee's employee ID", () => {
      const testValue = "01";
      const newEmployee = new Employee("Michael", testValue, "michael@bluthbananas.com");

      expect(newEmployee.id).toEqual(testValue);
    });
  });

  describe("email", () => {
    it("should return the employee's email", () => {
      const testValue = "michael@bluthbananas.com";
      const newEmployee = new Employee("Michael", "01", testValue);

      expect(newEmployee.email).toEqual(testValue);
    });
  });

  describe("getName()", () => {
    it("should return the employee's name via the getName() method", () => {
      const newEmployee = new Employee("Michael", "01", "michael@bluthbananas.com");

      expect(newEmployee.getName()).toEqual("Michael");
    });
  });

  describe("getId()", () => {
    it("should return the employee's id via the getId() method", () => {
      const newEmployee = new Employee("Michael", "01", "michael@bluthbananas.com");

      expect(newEmployee.getId()).toEqual("01");
    });
  });



  describe("getRole()", () => {
    it("should return the employee's role via the getRole() method", () => {
      const newEmployee = new Employee("Michael", "03", "michael@bluthbananas.com");

      expect(newEmployee.getRole()).toEqual('Employee');
    });
  });
});