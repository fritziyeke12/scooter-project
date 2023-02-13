const User = require('../src/User')

// User tests here
describe("User property checks", () => {
    const user1 = new User("jonjo", "passw", 17);
    test("username property", () => {
        expect(user1).toHaveProperty("username");
    })

    test("password property", () => {
        expect(user1).toHaveProperty("password");
    })

    test("age property", () => {
        expect(user1).toHaveProperty("age");
    })
})

describe("User method checks", () => {
    const user1 = new User("jackjo", "pass", 18);
    test("login method", () => {
        user1.login("pass");
        expect(user1.loggedIn).toBe(true);
    })

    test("logout method", () => {
        user1.logout();
        expect(user1.loggedIn).toBe(false);
    })
})
