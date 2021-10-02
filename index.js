// External required
const inquirer = require('inquirer');
const fs = require('fs');

// Internal required
const html = require('./util/generateHTML,js');

// write file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        err ? console.log(err) : console.log('Successfuly page generation!');
    });
}

// initialize
async function init() {
    try {
        //ask questions
        const response = await inquirer.prompt(ask);
        console.log("Saving Responses...");

        //generate markdown
        const draft = generateMarkdown(response, git);
        console.log("Generating README...");

        //write file
        await writeToFile(`example.html`, draft);

    } catch (error) {
        console.log(error);
    }
}

// run program
// init();