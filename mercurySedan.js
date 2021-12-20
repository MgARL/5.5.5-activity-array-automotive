//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

// creating th e extend class of Car
 class Car extends VehicleModule.Vehicle{
     constructor(make, model, year, color, mileage){
         super(make, model, year, color, mileage)
         this.maximumPassengers = 6;
         this.numberOfWheels = 4;
         this.maximumSpeed = 200;
         this.fuel = 100;
         this.scheduledService = false;
     }

     loadPassenger(num){
         this.passenger = num
        if ( this.passenger <= this.maximumPassengers){
            this.availableRoom = true
            console.log(`there is still ${this.maximumPassengers - this.passenger} seats available`)
        } else {
            console.log('There no more room for passenger')
        }
     }

     //start already works

     scheduleService() {
        if (this.mileage > 30000){
            this.scheduleService = true;
            console.log(`Your ${this.make} ${this.model} needs Maintenance`)
        } else{
            console.log('No Maintenance Required')
        }
     }
 }

//this shows how to call from this module...
let c = new Car("Mercury", "Sedan", "1965", "color", "mileage");

// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

c.scheduleService()

c.start()

c.loadPassenger(3)


