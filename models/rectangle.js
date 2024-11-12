class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }

    calculateArea() {
        return this.length * this.width;
    }
}

module.exports = Rectangle;