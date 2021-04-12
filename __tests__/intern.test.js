const Intern = require("../lib/intern");

test("Get name", () => {
    const intern = new Intern("name");
    expect(intern.getInternName());
});

test("Get id", () => {
    const intern = new Intern("id");
    expect(intern.getInternId());
});