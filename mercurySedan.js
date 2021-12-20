//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

// creating th e extend class of Car
 class Car extends VehicleModule.Vehicle{
     constructor(make, model, year, color, mileage){
         super(make, model, year, color, mileage)
         this.numberOfWheels = 4;
     }
 }

//this shows how to call from this module...
let c = new Car("Mercury", "Sedan", "1965", "color", "mileage");

// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

// console.log(v)
console.log(c)


