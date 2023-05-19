// Packages used for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [
    'What is the title of your project? ', 
    'Give me a description of your project: ', 
    'Will your project include a table of Contents? ', 
    'Enter in any installation rquirements for your project: ',
    'Please enter in useage information for this project: ',
    'Enter in any contributors, tutorials, or thrid party assets for the project: ',
    'What license are you using for your project? ',
    'Tests for the project can be entered here: ', 
    'What is your GitHub username? ', 
    'What is your email? '];

const fileName = "testReadME";

const licenseOp = ['MIT', 'Apache', 'GNU', 'BSD 2-Clause', 'BSD 3-Clause'];

// function that calls a method from generate to write a README file
function writeToFile(newREADME, data) {
    
    newREADME = generate.generateMarkdown(data);

    return newREADME;
}


// Function that initialize app
// the initilization gives users a breif description and then gives users prompts to answer
// The user response is saved and passed on to another function to make readme
// Finially we make a new file 
function init() {
    
    console.log("Welcome to ReadMe Creator.\nHere you will be given a series of questions to build a readme file for your project.\nLets get Started!!\n(If there is a need for a new line please use # to make a new line in input)\n");

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
        let newREADME = "";
        newREADME = writeToFile(newREADME, response);
        fs.writeFile(`${fileName}.md`, newREADME, error=> error? console.log(error):console.log('We have Sucessfully made your README file'));
    });
}


// Function call to initialize app
init();
