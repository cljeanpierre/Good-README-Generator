// function to generate license badge
function assignLicenseBadge (license){
  if (license !== "Unlicensed") {
    return `![GitHub license] (https://img.shields.io/badge/license-${license}-blue.svg)`
  }
    return ''
}

function assignLicenseLink (license) {
  if (license !== "Unlicensed") {
    return (
      `\n* [license] (#license)\n`
    )
  }
  return ''
}

function assignLicenseSection (license) {
  if (license !== "Unlicensed") {
    return (
      `## License
      This project is licensed under ${license} license.`
    )
  }
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${assignLicenseBadge (data.license)}

##Project Description-

${data.description}

##Table of Contents:

[Installation] (#installation)

[Usage] (#usage)
${assignLicenseLink (data.license)}

[Contributing] (#contributing)

[Tests](#tests)

[Questions](#questions)

##Installation-

To install the dependencies needed, type the following command:
${data.installation}

##Usage-
${data.usage}
${assignLicenseSection(data.license)}

##Contributing- 
${data.contributing}

##Tests-
To perform a test of the application, type the following command:
${data.test}

##Questions-
If you have any questions about this repository, please contact me at ${data.email}.  
For more information, please visit my GitHub page at ${data.github} (https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
