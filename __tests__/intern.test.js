const Intern = require("../lib/intern");

test("Get name", () => {
    const intern = new Intern("name");
    expect(intern.getInternName());
});

test("Get id", () => {
    const intern = new Intern("id");
    expect(intern.getInternId());
});
test("Get email", () => {
    const intern = new Intern("email");
    expect(intern.getInternEmail());
});
test("Get school", () => {
    const intern = new Intern("school");
    expect(intern.getInternSchool());
});