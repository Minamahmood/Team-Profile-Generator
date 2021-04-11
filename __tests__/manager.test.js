const Manager = require("../lib/manager");

test("can set OfficeNumber  via constructor", () => {
    const testValue = "1";
    const e = new Manager("name", "fake@fake.com", "officeNumber");
    expect(e.getOfficeNumber()).toBe(testValue);
});
test("can get officeNumber  via get officeNumber()", () => {
    const testValue = "1";
    const e = new Manager("name", "fake@fake.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
//name
test("can set OfficeNumber  via constructor", () => {
    const testValue = "1";
    const e = new Manager("name", "fake@fake.com", "officeNumber");
    expect(e.getOfficeNumber()).toBe(testValue);
});
test("can get officeNumber  via get officeNumber()", () => {
    const testValue = "1";
    const e = new Manager("name", "fake@fake.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
//email
test("can set OfficeNumber  via constructor", () => {
    const testValue = "1";
    const e = new Manager("name", "fake@fake.com", "officeNumber");
    expect(e.getOfficeNumber()).toBe(testValue);
});
test("can get officeNumber  via get officeNumber()", () => {
    const testValue = "1";
    const e = new Manager("name", "fake@fake.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});