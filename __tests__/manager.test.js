const { TestScheduler } = require("@jest/core");
const Manager = require("../lib/manager");

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
test("Get office number", () => {
    const manager = new Manager("officeNumber");
    expect(manager.getOfficeNumber());
});