const {Square, Triangle, Circle} = require('./lib/shapes');
// user inquirer to ask questions
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logo',
      message: 'Enter LOGO initials (no more than three characters)',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What text color do you want? (enter hex code)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want? ()',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What shape color do you want? (enter hex code)', 
    },
  ])
  .then(({logo, textColor, shape, shapeColor}) => {
    let shapeSelection;
    if (shape === 'circle') {
      shapeSelection = new Circle();
    }
    else if (shape ==='square') {
      shapeSelection = new Square();
    } else {
      shapeSelection = new Triangle();
    }
    shapeSelection.setShapeColor(shapeColor);
    shapeSelection.setText(logo);
    shapeSelection.setTextColor(textColor);

    const filename = `./dist/${shape}.svg`;

    fs.writeFile(filename, shapeSelection.rendor(), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

