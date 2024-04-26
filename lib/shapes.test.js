const { Shapes, Square, Triangle, Circle } = require('./shapes.js');

// make tests for each one of the classes

describe('Shapes', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Shapes();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Shapes();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Shapes();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  })

});
describe('Square', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Square();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Square();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Square();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  }) 
  test('render', () => {
    const square = new Square();
    square.setShapeColor('red');
    square.setText('hello');
    square.setTextColor('white');
    expect(square.rendor()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="padding-top: 20px; padding-left: 20px;"> 
    <rect width="100%" height="100%" fill="red" stroke="black" stroke-width="1" /> 
    <text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="white" style="text-shadow: 3px 3px black;">hello</text> 
  </svg>`)
  })
});

describe('Triangle', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Triangle();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Triangle();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Triangle();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  })
  test('render', () => {
    const triangle = new Triangle();
    triangle.setShapeColor('red');
    triangle.setText('hello');
    triangle.setTextColor('white');
    expect(triangle.rendor()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="padding-top: 20px; padding-left: 20px;"> 
    <polygon fill="red" points="150,0 300,250 0,250" stroke="black" stroke-width="1" /> 
    <text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="white" style="text-shadow: 3px 3px black;">hello</text> 
  </svg>`);
  })
});

describe('Circle', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Circle();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Circle();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Circle();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  })
  test('render', () => {
    const circle = new Circle();
    circle.setShapeColor('red');
    circle.setText('hello');
    circle.setTextColor('white');
    expect(circle.rendor()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="padding-top: 20px; padding-left: 20px;"> 
    <circle cx="150" cy="150" r="150" fill="red" stroke="black" stroke-width="1" /> 
    <text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="white" style="text-shadow: 3px 3px black;">hello</text> 
  </svg>`);
  })
});