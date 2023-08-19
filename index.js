const fs = require("fs");
const SVG = require('./lib/svg')
const inquirer = require('inquirer');

let example = new SVG('SVG', 'red', 'purple', 'square')

fs.writeFile('shape.svg', example.renderHTML(), function(err){
    if (err) {
        console.log(err)
    }
} )