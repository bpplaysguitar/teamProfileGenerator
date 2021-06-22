const Manager = require('../lib/manager')

describe("Manager", () => {
  describe("name", () => {
    it("should return the manager's name", () => {
      const testValue = "George Michael"
      const newManager = new Manager(testValue, "03", "georgemichael@bluthbananas.com", "07");

      expect(newManager.name).toEqual(testValue);
    });
  });

  describe("id", () => {
    it("should return the manager's employee ID", () => {
      const testValue = "03"
      const newManager = new Manager("George Michael", testValue, "georgemichael@bluthbananas.com", "07");

      expect(newManager.id).toEqual(testValue);
    });
  });

  describe("email", () => {
    it("should return the manager's email", () => {
      const testValue = "georgemichael@bluthbananas.com"
      const newManager = new Manager("George Michael", "03", testValue, "07");

      expect(newManager.email).toEqual(testValue);
    });
  });

  describe("officeNumber", () => {
    it("should return the manager's office number", () => {
      const testValue = "07"
      const newManager = new Manager("George Michael", "03", "georgemichael@bluthbananas.com", testValue);

      expect(newManager.officeNumber).toEqual(testValue);
    });
  });

  describe("getRole()", () => {
    it("should return the manager's role via the getRole() method", () => {
      const newManager = new Manager("George Michael", "03", "georgemichael@bluthbananas.com", "07");

      expect(newManager.getRole()).toEqual('Manager');
    });
  });
});