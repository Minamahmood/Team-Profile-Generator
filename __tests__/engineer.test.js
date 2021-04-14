const Engineer = require("../lib/engineer");

test("get role", () => {
  const engineer = new Engineer("getRole");
  expect(engineer.getRole());
});
test("Get github", () => {
  const engineer = new Engineer("github");
  expect(engineer.getGithub());
});
