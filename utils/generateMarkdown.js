// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
    1. Installation
    2. Usage
    3.Credits
    4.License
    5.Contributing
    

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributors}

  ## License
  ${data.license}

  ## Contributing
  If you would like to contribute to this project reach out to me via email at ${data.email}

  ## Tests
  ${data.tests}

  If you have any questions you can contact me at ${data.email} or reach out on linkedIn https://www.linkedin.com/in/shannonsagehorn/
  `;
}

module.exports = generateMarkdown;
