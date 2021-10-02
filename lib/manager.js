const Employee = require('./employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        console.log(`Phone (Work): ${this.officeNumber}`);
    }
}

module.exports = Manager;

/*
const Art = new Manager('Art', '9999', 'test@manager.com', '999-999-9999');

Art.getName();
Art.getID();
Art.getEmail();
Art.getOfficeNumber();
Art.getRole(); 
*/