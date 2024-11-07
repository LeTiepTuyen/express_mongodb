// Superclass Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Phương thức chung cho tất cả các động vật
  eat() {
    console.log(`${this.name} is eating.`);
  }

  // Phương thức sẽ bị ghi đè (overriden) bởi các class con
  makeSound() {
    console.log(`${this.name} is making a sound.`);
  }

  // Phương thức cung cấp thông tin về loài động vật
  getInfo() {
    console.log(`This is a ${this.name}, and it is ${this.age} years old.`);
  }
}

// Subclass Dog kế thừa từ Animal
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Gọi constructor của class cha (Animal)
    this.breed = breed; // Thuộc tính riêng của class Dog
  }

  // Ghi đè (override) phương thức makeSound() của class cha
  makeSound() {
    console.log(`${this.name}, the ${this.breed}, is barking.`);
  }

  // Phương thức riêng của class Dog
  fetch() {
    console.log(`${this.name} is fetching a ball.`);
  }

  // Ghi đè getInfo để thêm thông tin về giống loài
  getInfo() {
    super.getInfo(); // Gọi phương thức của class cha để hiển thị thông tin chung
    console.log(`This dog is of breed: ${this.breed}.`);
  }
}

// Subclass Bird kế thừa từ Animal
class Bird extends Animal {
  constructor(name, age, color) {
    super(name, age); // Gọi constructor của class cha (Animal)
    this.color = color; // Thuộc tính riêng của class Bird
  }

  // Ghi đè (override) phương thức makeSound() của class cha
  makeSound() {
    console.log(`${this.name} is chirping.`);
  }

  // Phương thức riêng của class Bird
  fly() {
    console.log(`${this.name} is flying.`);
  }

  // Ghi đè getInfo để thêm thông tin về màu sắc
  getInfo() {
    super.getInfo(); // Gọi phương thức của class cha để hiển thị thông tin chung
    console.log(`This bird has ${this.color} feathers.`);
  }
}

// Khởi tạo các đối tượng từ các class con
const myDog = new Dog("Buddy", 3, "Golden Retriever");
const myBird = new Bird("Tweety", 2, "yellow");

// Gọi các phương thức
myDog.eat(); // Buddy is eating.
myDog.makeSound(); // Buddy, the Golden Retriever, is barking.
myDog.fetch(); // Buddy is fetching a ball.
myDog.getInfo(); // Thông tin chung từ Animal và thông tin về giống loài từ Dog

console.log("-----------------");

myBird.eat(); // Tweety is eating.
myBird.makeSound(); // Tweety is chirping.
myBird.fly(); // Tweety is flying.
myBird.getInfo(); // Thông tin chung từ Animal và thông tin về màu sắc từ Bird
