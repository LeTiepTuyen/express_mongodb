// create a class shape with the following properties: width and length. And one function calculateArea() that will return the area of the shape:

class Shape {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  calculateArea() {
    return this.width * this.length;
  }
}

let shape1 = new Shape(5, 10);
let shape2 = new Shape(10, 20);

console.log(shape1.calculateArea());
console.log(shape2.calculateArea());
