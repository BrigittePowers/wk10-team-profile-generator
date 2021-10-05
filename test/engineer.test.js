const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it("Should return an object", () => {
        const obj = new Engineer();

        expect(typeof(obj)).toBe("object");
    });

    it("Should return the name, id, email, and github set via argument", () => {
        const testName = "Rebecca Gilbert";
        const testID = "12345";
        const testEmail = "email@email.com";
        const testgit = "profile"

        const eng = new Engineer('Rebecca Gilbert', '12345', 'email@email.com', 'profile');

        expect(eng.name).toEqual(testName);
        expect(eng.id).toEqual(testID);
        expect(eng.email).toEqual(testEmail);
        expect(eng.github).toEqual(testgit);
    });

    it("Should return github username via getGithub() function", () => {
        const test = "username";
        const eng = new Engineer("name", "id", "email", "username");

        expect(eng.getGithub()).toBe(test);
    });

    it("Should return role via getRole() function", () => {
        const test = "Engineer";
        const eng = new Engineer("name", "id", "email");

        expect(eng.getRole()).toBe(test);
    })
});