class Animal {
  static kingdom = "Animalia"; // Static field

  static getKingdom() {
    // Static method
    return this.kingdom;
  }
}

class Dog extends Animal {}

let dog = new Dog();
console.log(dog.getKingdom()); // Animalia
console.log(dog.kingdom);
