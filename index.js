const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description",
  },
  {
    type: "input",
    name: "contributors",
    message: "List any contributors by their github username",
  },
  {
    type: "input",
    name: "install",
    message: "How do you run your program? (include required packages)",
  },
  {
    type: "input",
    name: "usage",
    message: "How can others use your program?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select license type",
    choices: ["Creative Commons", "All Rights Reserved", "Open Source"],
  },
  {
    type: "input",
    name: "tests",
    message: "Enter tests here",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  let created = generateMarkdown(data);
  fs.writeFile(fileName, created, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}
console.log(questions);
// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    writeToFile("README.md", answers);
  });
}
// function call to initialize program
init();
