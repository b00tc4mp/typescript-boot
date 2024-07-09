import Vehicle from "./Vehicle"

console.info("TEST Vehicle");

console.info("CASE constructor");

{
    const vehicle = new Vehicle("land", "Land Rover", "4x4");
    console.assert(vehicle instanceof Vehicle, "vehicle is instance of Vehicle");
    console.assert(vehicle.type === "land", "Vehicle type is land");
    console.assert(vehicle.brand === "Land Rover", "Vehicle brand is Land Rover");
    console.assert(vehicle.model === "4x4", "Vehicle model is 4x4");
}

console.info("CASE toString");

{
    const vehicle = new Vehicle("land", "Ferrari", "Testarossa");
    console.assert(vehicle.toString() === "Vehicle: Ferrari Testarossa (land)", "vehicle to string is Ferrari Testarossa (land)");
}

{
    const vehicle = new Vehicle("land", "Lamborghini", "Diablo");
    console.assert(vehicle.toString() === "Vehicle: Lamborghini Diablo (land)", "vehicle to string is Lamborghini Diablo (land)");
}