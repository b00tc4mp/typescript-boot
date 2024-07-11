import Vehicle from "./vehicle"

const landRover = new Vehicle("terrestrial", "Land Rover", "4x4");
const ferrari = new Vehicle("terrestrial", "Ferrari", "Testarossa");
const lambo = new Vehicle("terrestrial", "Lamborghini", "Diablo");

const vehicles = [landRover, ferrari, lambo];

vehicles.forEach(vehicle => console.log(vehicle.toString()));

