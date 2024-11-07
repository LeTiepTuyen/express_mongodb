class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return `${super.getDetails()} and manages the ${this.department} department`;
  }
}

const manager = new Manager("Alice", 90000, "HR");
console.log(manager.getDetails());
// Alice earns 90000 and manages the HR department
