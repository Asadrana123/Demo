function Car(model) {
    this.model = model;
    this.start = function () {
      console.log(`Starting ${this.model}`);
    };
    Car.prototype.start = function () {
        console.log(`Starting ${this.model}`);
      };
  }
  
  const car1 = new Car("Tesla");
  console.log(car1);
  
  //car1.start(); 
//instance properties always override prototype properties when accessed.
  