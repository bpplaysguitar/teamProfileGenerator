const Intern = require('../lib/intern')

describe("Intern", () => {
  describe("name", () => {
    it("should return the intern's name", () => {
      const testValue = "Emily"
      const newIntern = new Intern(testValue, "17", "emily@test.com", "University of Minnesota");

      expect(newIntern.name).toEqual(testValue);
    });
  });

  describe("id", () => {
    it("should return the intern's employee ID", () => {
      const testValue = "17"
      const newIntern = new Intern("Emily", testValue, "emily@test.com", "University of Minnesota");

      expect(newIntern.id).toEqual(testValue);
    });
  });

  describe("email", () => {
    it("should return the intern's email", () => {
      const testValue = "emily@test.com"
      const newIntern = new Intern("Emily", "17", testValue, "University of Minnesota");

      expect(newIntern.email).toEqual(testValue);
    });
  });

  describe("school", () => {
    it("should return the intern's school", () => {
      const testValue = "University of Minnesota"
      const newIntern = new Intern("Emily", "17", "emily@test.com", testValue);

      expect(newIntern.school).toEqual(testValue);
    });
  });

  describe("getSchool()", () => {
    it("should return the intern's school via the getSchool() method", () => {
      const testValue = "University of Minnesota"
      const newIntern = new Intern("Emily", "17", "emily@test.com", testValue);

      expect(newIntern.getSchool()).toEqual(testValue);
    });
  });

  describe("getRole()", () => {
    it("should return the intern's school via the getRole() method", () => {
      const newIntern = new Intern("Emily", "17", "emily@test.com", "University of Minnesota");

      expect(newIntern.getRole()).toEqual('Intern');
    });
  });
});