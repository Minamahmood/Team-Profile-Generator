const Manager = require("../lib/manager");

test("can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("mmm", 1, "fake@fake.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});
test("can get GitHub username via get GitHub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("mmm", 1, "fake@fake.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});