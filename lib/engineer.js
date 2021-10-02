const Employee = require('./employee');
class Engineer extends Employee {
    constructor (name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }

    getGitHub() {
        console.log(`GitHub Username: ${this.gitHub}`);
    }
}

module.exports = Engineer;

/*
const Art = new Engineer('Art', '9999', 'test@manager.com', 'username');

Art.getName();
Art.getID();
Art.getEmail();
Art.getGitHub();
Art.getRole(); 
*/