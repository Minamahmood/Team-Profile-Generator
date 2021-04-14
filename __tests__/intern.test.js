const Intern = require("../lib/intern");
test("get role", () => {
  const engineer = new Engineer("getRole");
  expect(engineer.getRole());
});
test("Get school", () => {
  const intern = new Intern("school");
  expect(intern.getInternSchool());
});
