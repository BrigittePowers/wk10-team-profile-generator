const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe('Engineer', () => {
    it("Should return an object", () => {
        const obj = new Manager();

        expect(typeof(obj)).toBe("object");
    });

    it("Should return the name, id, email, and number set via argument", () => {
        const testName = "Rebecca Gilbert";
        const testID = "12345";
        const testEmail = "email@email.com";
        const testnum = "123465789"

        const mng = new Manager('Rebecca Gilbert', '12345', 'email@email.com', '123465789');

        expect(mng.name).toEqual(testName);
        expect(mng.id).toEqual(testID);
        expect(mng.email).toEqual(testEmail);
        expect(mng.officeNumber).toEqual(testnum);
    });

    it("Should return school via getOfficeNumber() function", () => {
        const test = "123465789";
        const mng = new Manager("name", "id", "email", "123465789");

        expect(mng.getOfficeNumber()).toBe(test);
    });

    it("Should return role via getRole() function", () => {
        const test = "Manager";
        const mng = new Manager("name", "id", "email");

        expect(mng.getRole()).toBe(test);
    })
});