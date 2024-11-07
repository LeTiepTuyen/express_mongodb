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

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle1 = new Circle(5);

//get:
console.log(circle1.circumference);
console.log(circle1.area);

//set:
circle1.diameter = 20;
console.log(circle1.diameter); // 20
console.log(circle1.radius); // 10
