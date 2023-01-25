// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',   
        },

        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project.'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What is required to get your project installed?'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use',
        },

        
    ])

    


    

    

    




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();