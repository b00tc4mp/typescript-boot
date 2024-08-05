import Vehicle from "./Vehicle";

const landRover = new Vehicle("land", "Land Rover", "4x4");
const ferrari = new Vehicle("land", "Ferrari", "Testarossa");
const lambo = new Vehicle("land", "Lamborghini", "Diablo");

const vehicles = [landRover, ferrari, lambo]

vehicles.forEach(vehicle => console.log(vehicle.toString()))