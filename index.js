const fs = require("fs");
const SVG = require('./lib/svg')
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your text (max 3 characters)',
            // limits characters to 3
            validate: function (input) {
                if (input.length <= 3) {
                    return true
                } else {
                    return 'Please use 3 characters or less'
                }
            }
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like the font to be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like the logo to be?',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'fill',
            message: 'What color would you like the background to be?'
        },
    ])
    .then((data) => {
        let fileData = new SVG(data.text, data.color, data.fill, data.shape)
        fs.writeFile('logo.svg', fileData.renderHTML(), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });