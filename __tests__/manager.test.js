const { TestScheduler } = require("@jest/core");
const Manager = require("../lib/manager");
test("get role", () => {
  const engineer = new Engineer("getRole");
  expect(engineer.getRole());
});
test("Get office number", () => {
  const manager = new Manager("officeNumber");
  expect(manager.getOfficeNumber());
});
