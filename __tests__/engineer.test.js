const Engineer = require("../lib/engineer");

test("can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("name", "fake@fake.com", "GitHubUser");
    expect(e.getGithub()).toBe(testValue);
});
test("can get GitHub username via get GitHub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("name", "fake@fake.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});