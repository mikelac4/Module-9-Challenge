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

        {
            type: 'input',
            name: 'contributing',
            message: 'Provide instructions for contrubutions.',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions for testing.',
        },

        {
            type: 'checkbox',
            message: 'What license are you using?',
            name: 'license',
            choices: ['MIT']
        },

        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }  
    ])

    .then((data) => {
        const readMe = generateMarkdown(data);

        fs.writeFile('README.md', readMe, (err) => 
        err ? console.log(err) : console.log('README.md created')
        );
    });  



