const { TestScheduler } = require("@jest/core");
const Manager = require("../lib/manager");
test("get role", () => {
  const manager = new Manager("getRole");
  expect(manager.getRole());
});

test("Get office number", () => {
  const manager = new Manager("getOfficeNumber");
  expect(manager.getOfficeNumber());
});
test("get name", () => {
  const manager = new Manager("guy");
  expect(manager.getName());
});
