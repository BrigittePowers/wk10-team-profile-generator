const { expect } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('Employee', () => {
    it("Should return an object", () => {
        const obj = new Employee();

        expect(typeof(obj)).toBe("object");
    });

    it("Should return the name, id, and email set via argument", () => {
        const testName = "Rebecca Gilbert";
        const testID = "12345";
        const testEmail = "email@email.com";

        const emp = new Employee('Rebecca Gilbert', '12345', 'email@email.com');

        expect(emp.name).toEqual(testName);
        expect(emp.id).toEqual(testID);
        expect(emp.email).toEqual(testEmail);
    });

    it("Should return name via getName() function", () => {
        const test = "Maggie";
        const emp = new Employee("Maggie", "id", "email");

        expect(emp.getName()).toBe(test);
    });

    it("Should return ID via getId) function", () => {
        const test = "123";
        const emp = new Employee("name", "123", "email");

        expect(emp.getId()).toBe(test);
    })

    it("Should return email via getEmail() function", () => {
        const test = "email@email.com";
        const emp = new Employee("name", "id", "email@email.com");

        expect(emp.getEmail()).toBe(test);
    })

    it("Should return role via getRole() function", () => {
        const test = "Employee";
        const emp = new Employee("name", "id", "email");

        expect(emp.getRole()).toBe(test);
    })
});