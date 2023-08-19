const fs = require("fs");
const SVG = require('./lib/svg')
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'Enter your text (max 3 characters)',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like the font to be?'
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
        fs.writeFile('shape.svg', fileData.renderHTML(), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });


// fs.writeFile('shape.svg', example.renderHTML(), function (err) {
//     if (err) {
//         console.log(err)
//     }
// })