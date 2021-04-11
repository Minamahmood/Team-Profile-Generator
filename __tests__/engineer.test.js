const Engineer = require("../lib/engineer");

test("can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("mm", "fake@fake.com", "GitHubUser");
    expect(e.getRole()).tobe(testValue);
});