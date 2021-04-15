const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
test("dose my test work", () => {
  const yes = true;
  expect(yes).toBe(true);
});
test("get name", () => {
  const manager = new Manager("name");
  expect(manager.getName());
});
test("Get id", () => {
  const manager = new Manager("id");
  expect(manager.getId());
});
test("Get email", () => {
  const manager = new Manager("email");
  expect(manager.getEmail());
});
// const Manager = require("../lib/manager");
// const Engineer = require("../lib/engineer");
// const Intern = require("../lib/intern");
