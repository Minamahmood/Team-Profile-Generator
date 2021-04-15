const Intern = require("../lib/intern");
test("get role", () => {
  const intern = new Intern("getRole");
  expect(intern.getRole());
});
test("Get school", () => {
  const intern = new Intern("school");
  expect(intern.getSchool());
});
