// External required
const inquirer = require('inquirer');
const fs = require('fs');

// Internal required
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generate = require('./util/generateHTML');

// Output
const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "teamprofile.html");

const team = [];

// Inquirer
function init() {
    console.log("Thanks for using the Team Profile Generator. Please follow the prompts to build a team. /n /n")
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: 'What is the FULL NAME of the manager of this team? (Firstname Lastname)',
            validate: function (answer) {
                const regName =  /^[a-zA-Z]+( [a-zA-Z]+)+$/;
                // input required
                if (answer.length < 1) {
                    return console.log("Input required to continue.")
                // titlecase required
                } else if (!regName.test(answer)) {
                    return console.log("Incorrect format (FirstName Lastname required.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'mID',
            message: 'What is their 5-digit employee ID?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Input required to continue.")
                }
                return true;
            } 
        },
        {
            type: 'input',
            name: 'mEmail',
            message: 'And their email?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Input required to continue.")
                }
                return true;
            } 
        },
        {
            type: 'input',
            name: 'mNum',
            message: 'And lastly, what is their office number?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Input required to continue.")
                }
                return true;
            }
        }
    ])

        .then(function (managerRes) {
            const manager = new Manager(managerRes.mName, managerRes.mID, managerRes.mEmail, managerRes.mNumber);
            team.push(manager);

            makeTeam();

            function makeTeam() {
                inquirer.prompt([
                    // team member selection
                    {
                        type: 'list',
                        message: 'What role do you need to add to your team?',
                        name: 'employee',
                        choices: [
                            "Intern",
                            "Engineer",
                            "[Finish Making Team]"
                        ],
                    }
                ])
                    .then(function (role) {
                        // INTER

                        if (role.Employee === "Intern") {
                            console.log('Please answer the following questions to add an intern to the team.')
                            inquirer.prompt([

                            ])
                                .then(function (internRes) {
                                    const intern = new Intern(internRes.iName, internRes.iID, internRes.iEmail, internRes.iSchool);
                                    team.push(intern);
                                    makeTeam();
                                })
                        // ENGINEER
                        } else if (role.Employee === "Engineer") {
                            console.log('Please answer the following questions to add an engineer to the team.')
                        } else {
                            // generate html on exit
                            const draft = generate(team);
                            fs.writeFile(outputPath, draft, err => {
                                err ? console.log(err) : console.log('Team profile successfully created!');
                            });
                        }
                    }) 
            }
        })
    
}

init();