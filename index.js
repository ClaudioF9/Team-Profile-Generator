const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your team manager?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your team manager's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your team manager's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your team manager's office number?",
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
    },
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "Where did the intern attend school?",
    },
];


const addEmployeeQuestion = {
    type: "list",
    name: "employeeType",
    message: "Which type of employee would you like to add?",
    choices: ["Engineer", "Intern", "Finish building the team"],
  };

function addManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      addEmployee();
    });
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      addEmployee();
    });
}

function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      addEmployee();
    });
}

function addEmployee() {
    inquirer.prompt(addEmployeeQuestion).then((answer) => {
      switch (answer.employeeType) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
            addIntern();
            break;
          default:
            writeToFile(outputPath, render(teamMembers));
        }
    });
}

function writeToFile(outputPath, data) {
    fs.writeFile(outputPath, data, (err) =>
    err ? console.error(err) : console.log("Your team has been successfully created!")
    );
    }
    

addManager();


