//this includes the vehicle class as a module
// /import Vehicle from './vehicleBaseClass.js';

//this shows how to call from this module...
// let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...



//  const VehicleModule = require("./vehicleBaseClass")
  import  Vehicle  from "./vehicleBaseClass.js";

class NewCarModule extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {

        this.passenger = num
        if (num > this.maxPassengers){
            console.log(`I am sorry but the ${this.model} + ${this.make} does not have enough space to take all passengers.`)
        } else {
            console.log(`the ${this.model} + ${this.make} is all set! off we go`)
        }
        

    }

    start(){
        if (this.fuel > 0){
            console.log(this.started)
            console.log(" Let's drive off!")
            this.started = true
            console.log(this.started)
        } else {
            console.log("Bro we lost our family, our tank is at 0")
        }

    }
    
    service(mileage){
        if (mileage > 30000){
            this.scheduleService = true;
        }

    }

}

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


const myCar = new NewCarModule('Toyota', 'camry',2022,'red',15000)
// console.log(myCar.make)
 myCar.start()
 myCar.loadPassenger(3)
 myCar.stop()
 myCar.service(50000)

console.log(myCar)








//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





// //Create at least two new instances of the Car class and test them here:
//  let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//  console.log(v.make)