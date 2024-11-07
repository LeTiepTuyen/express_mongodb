class House {
  constructor() {
    this.rooms = 3;
    this.bathrooms = 2;
    this.garage = true;
  }
}

class Mansion extends House {
  constructor(rooms, bathrooms, garage, swimmingPool) {
    super(rooms, bathrooms, garage);
    this.swimmingPool = swimmingPool;
  }

  showInfo() {
    console.log(
      `Rooms: ${this.rooms}, Bathrooms: ${this.bathrooms}, Garage: ${this.garage}, Swimming Pool: ${this.swimmingPool}`
    );
  }
}

let mansion1 = new Mansion(5, 4, true, true);
mansion1.showInfo();
