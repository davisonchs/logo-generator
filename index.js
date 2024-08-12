const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape: ',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        name: 'shapeColor',
        message: 'What color would your shape be?'
    },
    {
        name: 'text',
        message: 'Please provide text for the shape?'
    },
    {
        name: 'textColor',
        message: 'What color should your text be?'
    }
]


inquirer.prompt(questions).then((answers) => {
    switch (answers.shape) {
        case 'Circle':

            break;
        case 'Square':

            break;
        default:

    }
})