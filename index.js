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
    name: "title",
    message: "Enter the title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description",
  },
  {
    type: "license",
    name: "license",
    message: "Select license type",
    choices: ["Creative Commons", "All Rights Reserved", "Open Source"],
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
    writeToFile("README.md", answers);
  });
}

// function call to initialize program
init();
