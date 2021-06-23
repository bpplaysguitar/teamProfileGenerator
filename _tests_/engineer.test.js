const Engineer = require('../lib/engineer')

describe("Engineer", () => {
  describe("name", () => {
    it("should return the engineer's name", () => {
      const testValue = "Maeby"
      const newEngineer = new Engineer(testValue, "10", "maeby@bluthbananas.com", "maebyFunke");

      expect(newEngineer.name).toEqual(testValue);
    });
  });

  describe("id", () => {
    it("should return the engineer's employee ID", () => {
      const testValue = "10"
      const newEngineer = new Engineer("Maeby", testValue, "maeby@bluthbananas.com", "maebyFunke");

      expect(newEngineer.id).toEqual(testValue);
    });
  });

  describe("email", () => {
    it("should return the engineer's email", () => {
      const testValue = "maeby@bluthbananas.com"
      const newEngineer = new Engineer("Maeby", "10", testValue, "maebyFunke");

      expect(newEngineer.email).toEqual(testValue);
    });
  });

  describe("github", () => {
    it("should return the engineer's github", () => {
      const testValue = "maebyFunke"
      const newEngineer = new Engineer("Maeby", "10", "maeby@bluthbananas.com", testValue);

      expect(newEngineer.github).toEqual(testValue);
    });
  });

  describe("getGethub()", () => {
    it("should return the engineer's github via the getGethub() method", () => {
      const testValue = "maebyFunke"
      const newEngineer = new Engineer("Maeby", "10", "maeby@bluthbananas.com", testValue);

      expect(newEngineer.getGithub()).toEqual(`<a href="https://github.com/${testValue}" target="_blank">${testValue}</a>`);
    });
  });

  describe("getRole()", () => {
    it("should return the engineer's role via the getRole() method", () => {
      const newEngineer = new Engineer("Maeby", "10", "maeby@bluthbananas.com", "maebyFunke");

      expect(newEngineer.getRole()).toEqual('Engineer');
    });
  });
});