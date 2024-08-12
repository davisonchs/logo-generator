class Shape {
    constructor(text, charColor, shapeColor){
        this.text =  text;
        this.charColor = charColor;
        this.shapeColor =  shapeColor
    }   
}

class Circle extends Shape{

}

class Triangle extends Shape{
    
}

class Square extends Shape{
    
}

module.exports =  {Circle, Triangle, Square}