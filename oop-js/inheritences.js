class Animal {
  static kingdom = "Animalia"; // Static field

  static getKingdom() {
    // Static method
    return this.kingdom;
  }
}

class Dog extends Animal {}

console.log(Dog.getKingdom()); // Animalia
console.log(Dog.kingdom);
