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
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="padding-top: 20px; padding-left: 20px;"> 
    <rect width="100%" height="100%" fill="${this.shapeColor}" stroke="black" stroke-width="1" />
    <text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="text-shadow: 3px 3px black;">${this.text}</text> 
  </svg>`
  } 
}



class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  rendor() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="padding-top: 20px; padding-left: 20px;"> 
    <polygon fill="${this.shapeColor}" points="150,0 300,250 0,250" stroke="black" stroke-width="1" />
    <text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="text-shadow: 3px 3px black;">${this.text}</text> 
  </svg>`
  }
}



class Circle extends Shapes {
  constructor(shapeColor, text, textColor) {
   super(shapeColor, text, textColor);
  }
  rendor() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="padding-top: 20px; padding-left: 20px;"> 
    <circle cx="150" cy="150" r="150" fill="${this.shapeColor}" stroke="black" stroke-width="1" />
    <text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="text-shadow: 3px 3px black;">${this.text}</text> 
  </svg>`
  }
}

module.exports = {Shapes, Square, Triangle, Circle}