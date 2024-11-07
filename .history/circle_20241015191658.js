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

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle1 = new Circle(5);

console.log(circle1.diameter); // 10
console.log(circle1.circumference); // 31.41592653589793
console.log(circle1.area); // 78.53981633974483
