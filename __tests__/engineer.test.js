const Engineer = require("../lib/engineer");

test("Get name", () => {
    const engineer = new Engineer("name");
    expect(engineer.getName());
});