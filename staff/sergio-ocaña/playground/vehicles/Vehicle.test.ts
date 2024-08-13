import Vehicle from "./vehicle";

console.info("TEST Vehicle");

console.info("CASE constructor");
{
    const vehicle = new Vehicle("aquatic", "MAKO", "boat");
    console.assert(vehicle instanceof Vehicle, "vehicle is instance of Vehicle");
    console.assert(vehicle.type === "aquatic", "vehicle type is aquatic");
    console.assert(vehicle.brand === "MAKO", "vehicle brand is MAKO");
    console.assert(vehicle.model === "boat", "vehicle model is boat");
}

console.info('CASE toString')

{
    const vehicle = new Vehicle("terrestrial", "Peugeot", "Partner")
    console.assert(vehicle.toString() === "Vehicle: Peugeot Partner (terrestrial)", "vehicle to string is Peugeot Partner (terrestrial)")
}