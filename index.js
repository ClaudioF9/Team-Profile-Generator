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

const addEngineerQuestion = {
    type: "list",
    name: "addEngineer",
    message: "would you like to add an engineer",
    choices: ["Yes, ad an engineer", "No, finish building the team"],
};

const addInternQuestion = {
    type: "list",
    name: "addIntern",
    message: "Would you like to add an intern?",
    choices: ["Yes, add an intern", "No, finish building the team"],
};


