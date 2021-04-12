const Engineer = require("../lib/engineer");

test("Get name", () => {
    const engineer = new Engineer("name");
    expect(engineer.getName());
});
test("Get id", () => {
    const engineer = new Engineer("id");
    expect(engineer.getId());
});