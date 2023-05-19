// TODO: Create a function that returns a license badge based on which license is passed in
const properties = {
  badge:"",
  link:""
};
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge ="";
  //if(license.length>= 1)
  //console.log(license)
  switch(license){
    case 'MIT':
      badge = 'https://img.shields.io/badge/license-MIT-green';
      break;
    case 'Apache':
      badge = 'https://img.shields.io/badge/license-Apache-green';
      break;
    case 'GNU':
      badge = 'https://img.shields.io/badge/license-GPL-green';
      break;
    case 'BSD 2-Clause':
      badge = 'https://img.shields.io/badge/license-BSD--2--Clause-green';
      break;
    case 'BSD 3-Clause':
      badge = 'https://img.shields.io/badge/license-BSD--3--Clause-green';
      break;
    default:
      badge = "";
  }
  //console.log(properties.badge);
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let link=""
  switch(license){
    case "MIT":
      link= 'https://spdx.org/licenses/MIT.html';
      break;
    case "Apache":
      link='https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case "GNU":
      link= 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case "BSD 2-Clause":
      link = 'https://spdx.org/licenses/BSD-2-Clause.html';
      break;
    case "BSD 3-Clause":
      link = 'https://spdx.org/licenses/BSD-3-Clause.html';
      break;
    default:
      link = ""
  }
  //console.log(properties.link);
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //console.log(license)
  if(license != ""){
    let link =renderLicenseLink(license);
    let licenseSection =
`
## License

The project is covered by the ${license} license. Please refer to the repo for more information on the license. The link below we will link users to the template followed to make license.

License Link: ${link}

`;
    //console.log(link)
    return licenseSection;
  }
  else return ""
}

function format(description, instal, usage, credits, test){
  let formated =[];
  
  formated.push(makeWord(description))
  formated.push(makeWord(instal));
  formated.push(makeWord(usage));
  formated.push(makeWord(credits));
  formated.push(makeWord(test));
  return formated;
}

function makeWord(sentance){
  let word="";
  for(let i =0; i<sentance.length; i++){
    if(i==0) word=sentance[i];
    else word = word+'\n \n'+sentance[i];
  }
  return word;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data.licenses);
  let badge = renderLicenseBadge(data.licenses[0]);
  let tableContents=""
    if(data.tableContents){ 
        tableContents = 
`## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Badges](#badges)

[Tests](#tests)

[Questions](#questions)
`
    }
  let formated = format(data.description.split('#'),data.installation.split('#'), data.usage.split('#'), data.credits.split('#'), data.tests.split('#') );

  let newREADME=
`
# ${data.title}

![license](${badge})

## Description
${formated[0]}

${tableContents}

## Installation
${formated[1]}

## Usage
${formated[2]}

## Credits
${formated[3]}

${renderLicenseSection(data.licenses[0])}

## Badges

![license](${badge})

## Tests

${formated[4]}

## Questions

Any questions you may have you can contact me through my email shown below and there is a link to my github account.

Email: ${data.email}

GitHub Profile: https://github.com/${data.github}
`;
  //console.log(newREADME);
  return newREADME;
}

module.exports = 
  {
    generateMarkdown,
  };
