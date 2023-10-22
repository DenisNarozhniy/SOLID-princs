class Vehicle {
    accelerate() {

    }
   
    slowDown() {

    }
}
   
class FreeDirectionalVehicle extends Vehicle {
    turn(angle: number) {

    }
}
   
class BidirectionalVehicle extends Vehicle {
}

class Car extends FreeDirectionalVehicle  {
}
   
class Bus extends FreeDirectionalVehicle {
}

class Train extends BidirectionalVehicle {
}