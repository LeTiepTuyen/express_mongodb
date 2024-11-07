class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  makeSound() {
    console.log(`${this.name} is making a sound.`);
  }

  getInfo() {
    console.log(`This is a ${this.name}, and it is ${this.age} years old.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  // Ghi đè (override) phương thức makeSound() của class cha
  makeSound() {
    console.log(`${this.name}, the ${this.breed}, is barking.`);
  }

  fetch() {
    console.log(`${this.name} is fetching a ball.`);
  }

  getInfo() {
    super.getInfo();
    console.log(`This dog is of breed: ${this.breed}.`);
  }
}

class Bird extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  // Ghi đè (override) phương thức makeSound() của class cha
  makeSound() {
    console.log(`${this.name} is chirping.`);
  }

  fly() {
    console.log(`${this.name} is flying.`);
  }

  c;
  getInfo() {
    super.getInfo();
    console.log(`This bird has ${this.color} feathers.`);
  }
}

const myDog = new Dog("Buddy", 3, "Golden Retriever");
const myBird = new Bird("Tweety", 2, "yellow");

myDog.eat();
myDog.makeSound();
myDog.fetch();
myDog.getInfo();

console.log("-----------------");

myBird.eat();
myBird.makeSound();
myBird.fly();
myBird.getInfo();
