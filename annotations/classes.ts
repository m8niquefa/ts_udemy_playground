class Vehicle {
  constructor(public color: string) {}//This is the same as declaring a property and assigning it in the constructor with "this".
  drive() : void {
    console.log("chugga chugga");
  }

  honk() : void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

class Car extends Vehicle { 
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.drive();
car.honk();

/*
modifiers: public, private, protected: 
public is the default modifier. 
Private can only be called by other methods in this class. 
Protected can be called by other methods in this class, or by other methods in child classes.
*/