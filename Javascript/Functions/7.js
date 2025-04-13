function Car(make, model) {
    this.make = make;
    this.model = model;
    this.drive = function() {
        console.log(`${this.make} ${this.model} is driving.`);
      };
  }
  const car1 = new Car('Tesla', 'Model S');
  car1.drive(); 
  