const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes')

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


inquirer.prompt(questions).then(({shape, shapeColor, text, textColor}) => {
    let classObj;
    switch (shape) {
        case 'Circle':
            classObj =  new Circle(text, textColor, shapeColor);
            break;
        case 'Square':
        classObj = new Square(text, textColor, shapeColor);
            break;
        default:
            classObj =  new Triangle(text, textColor, shapeColor);

    }
    fs.writeFile('logo.svg', classObj.render(), (err, res)=> {
        if (err) throw err;
        console.log('logo created');
    })
})