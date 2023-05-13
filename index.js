// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project? ', 
    'Give me a description of your project: ', 
    'Will your project include a table of Contents? ', 
    'Enter in any installation rquirements for your project: ',
    'Please enter in useage information for this project: ',
    'Enter in any contributors, tutorials, or thrid party assets for the project: \n(If there are multipul contributors please use # to separate each one)\n',
    'What license are you using for your project? ',
    'Tests for the project can be entered here: ', 
    'What is your GitHub username? ', 
    'What is your email? '];

// TODO: Create a function to write README file
function writeToFile(newREADME, data) {
    
    
    newREADME = generate.generateMarkdown(data);

    return newREADME;
}

// TODO: Create a function to initialize app
const licenseOp = ['MIT', 'Apache', 'GNU', 'BSD 2-Clause', 'BSD 3-Clause'];
//const default = 'MIT';
function init() {
    inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message: questions[0]
        },
        {
            type:'input',
            name:'description',
            message: questions[1]
        },
        {
            type:'confirm',
            name:'tableContents',
            message: questions[2]
        },
        {
            type:'input',
            name:'installation',
            message: questions[3]
        },
        {
            type:'input',
            name:'usage',
            message: questions[4]
        },
        {
            type:'input',
            name:'credits',
            message: questions[5]
        },
        {
            type:'checkbox',
            name:'licenses',
            message: questions[6],
            choices:[...licenseOp]
        },
        {
            type:'input',
            name:'tests',
            message: questions[7]
        },
        {
            type:'input',
            name:'github',
            message: questions[8]
        },
        {
            type:'input',
            name:'email',
            message: questions[9]
        }
    ])
    .then(response => {
        //
        var newREADME = "";
        //const newREADME = fs.readFile('newReadME.md', 'utf-8', error=> error ? console.log(error): created=ture);
        //if(created) 
        writeToFile(newREADME, response);
        fs.writeFile('newReadME.md', newREADME, error=> error? console.log(error):console.log('We have Sucessfully made your README file'));
    });
}

// Function call to initialize app
init();
