// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-green'
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-green'
    case 'GNU':
      return 'https://img.shields.io/badge/license-GPL-green'
    case 'BSD 2-Clause':
      return 'https://img.shields.io/badge/license-BSD--2--Clause-green'
    case 'BSD 3-Clause':
      return 'https://img.shields.io/badge/license-BSD--3--Clause-green'
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license){
    case 'MIT':
      return 'https://spdx.org/licenses/MIT.html'
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0'
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    case 'BSD 2-Clause':
      return 'https://spdx.org/licenses/BSD-2-Clause.html'
    case 'BSD 3-Clause':
      return 'https://spdx.org/licenses/BSD-3-Clause.html'
    default:
      return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if(license != ""){
    var licenseSection =
    `
    ## License

    The project is covered by the ${license}. Please refer to the repo for more information on the license. The link below we will link users to the template followed to make license.
    License Link: ${renderLicenseLink(license)}
    
    `;
    return licenseSection;
  }
  else return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  var tableContents=""
    if(data.tableContents){ 
        tableContents = 
        `## Table of Contents
        
        [Installation](#Installation)
        [Usage](#Usage)
        [Credits](#Credits)
        [License](#License)
        [Tests and Questions](#Tests)
        `
    }

  var newREADME=
    `
    # ${data.title}

    ${renderLicenseBadge(data.licenses)}

    ## Description

    ${data.description}

    ${tableContents}

    ## Installation

    ${data.installation}

    ## Credits

    ${data.credits}

    ${renderLicenseSection(data.licenses)}

    #badges
    
    ${renderLicenseBadge(data.licenses)}

    ## Tests
    
    ${data.tests}

    ## Questions

    Any questions you may have you can contact me through my email shown below and there is a link to my github account.
    Email: ${data.email}
    GitHub Profile: https://github.com/${data.github}
    `;
  return newREADME
}

module.exports = generateMarkdown;
