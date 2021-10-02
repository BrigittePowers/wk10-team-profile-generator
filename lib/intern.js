/*
extends employee
school
getSchool()
getRole() -- returns intern
*/

const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'School';
    }

    GetSchool() {
        console.log(`School: ${this.school}`);
    }
}

module.exports = Intern;
