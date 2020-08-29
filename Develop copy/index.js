var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
inquirer
  .prompt([
    { type: "input", name: "title", message: "Enter the title" },
    { type: "input", name: "description", message: "Enter the description" },
    {
      type: "lis",
      name: "license",
      message: "Select license type",
      choices: ["Op1", "Op2", "Op3"],
    },
  ])
  .then((answers) => {
    answers.title;
    answers.description;
    answers.writeToFile("README.md");
  });

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
