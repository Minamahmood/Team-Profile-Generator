const Engineer = require("../lib/engineer");

test("Get name", () => {
    const engineer = new Engineer("name");
    expect(engineer.getName());
});
test("Get id", () => {
    const engineer = new Engineer("id");
    expect(engineer.getId());
});
test("Get email", () => {
    const engineer = new Engineer("email");
    expect(engineer.getEmail());
});
test("Get github", () => {
    const engineer = new Engineer("github");
    expect(engineer.getGithub());
});