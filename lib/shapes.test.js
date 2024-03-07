const {Shapes, Square, Triangle, Circle} = require('./shapes.js');

// make tests for each one of the classes


describe('Shapes', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Shapes();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
});

});
describe('Square', () => {
  // create a test for each one of the classes
});

describe('Triangle', () => {
  // create a test for each one of the classes

});

describe('Circle', () => {
  // create a test for each one of the classes

});