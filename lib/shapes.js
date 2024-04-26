class Shapes {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  setShapeColor(newShapeColor) {
    this.shapeColor = newShapeColor;
  }
  setText(newText) {
    this.text = newText;
  }
  setTextColor(newTextColor) {
    this.textColor = newTextColor;
  }
}


class Square extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  rendor() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="${this.shapeColor}" /> <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
  } 
}



class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  rendor() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <polygon fill="${this.shapeColor}" points="100,20 200,170 0,170" /> <text x="50" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
  }
}



class Circle extends Shapes {
  constructor(shapeColor, text, textColor) {
   super(shapeColor, text, textColor);
  }
  rendor() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="150" r="150" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
  }
}

module.exports = {Shapes, Square, Triangle, Circle}