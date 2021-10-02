class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getID() {
        console.log(`Employee ID: ${this.id}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

    getRole() {
        console.log(`Role: ${this.role}`);
    }
}

module.exports = Employee;

/*
const dominic = new Employee('Dominic', 'T6146', 'test@test.com');

dominic.getName();
dominic.getID();
dominic.getEmail();
dominic.getRole(); 
*/