const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What command will be used to install the dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the user with any information needed to use the repository.",
    },
    {
        type: "list",
        name: "license",
        message: "Which type of license will your project use?",
        choices: ["MIT", "BSD-3-Clause", "ISC", "Apache-2.0", "Unlicensed"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide the user any information needed to make contributions to the repository."
    },
    {
        type: "input",
        name: "tests",
        message: "What command will be used to run tests on your project?",
        default: "npm test"
    },

];

console.log(questions);

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("Generating README form...");
            writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
        })

}

// function call to initialize program
init();
