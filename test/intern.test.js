const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

describe('Engineer', () => {
    it("Should return an object", () => {
        const obj = new Intern();

        expect(typeof(obj)).toBe("object");
    });

    it("Should return the name, id, email, and school set via argument", () => {
        const testName = "Rebecca Gilbert";
        const testID = "12345";
        const testEmail = "email@email.com";
        const testschool = "school"

        const int = new Intern('Rebecca Gilbert', '12345', 'email@email.com', 'school');

        expect(int.name).toEqual(testName);
        expect(int.id).toEqual(testID);
        expect(int.email).toEqual(testEmail);
        expect(int.school).toEqual(testschool);
    });

    it("Should return school via getSchool() function", () => {
        const test = "school";
        const int = new Intern("name", "id", "email", "school");

        expect(int.getSchool()).toBe(test);
    });

    it("Should return role via getRole() function", () => {
        const test = "Intern";
        const int = new Intern("name", "id", "email");

        expect(int.getRole()).toBe(test);
    })
});