class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle1 = new Circle(5);

//get:
console.log(circle1.diameter); // 10
console.log(circle1.circumference); // 31.41592653589793
console.log(circle1.area); // 78.53981633974483

//set:
circle1.diameter = 20;
console.log(circle1.diameter); // 20
console.log(circle1.radius); // 10

circle1.circumference = 62.83185307179586;
