const Employee = require("../lib/employee");
test("dose my test work", () => {
  const yes = true;
  expect(yes).toBe(true);
});
TestScheduler("get name", () => {
  const manager = new Manager("name");
  expect(manager.getManagerName());
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
