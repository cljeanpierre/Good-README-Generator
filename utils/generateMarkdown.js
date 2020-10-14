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

`;
}

module.exports = generateMarkdown;
