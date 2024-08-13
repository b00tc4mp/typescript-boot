type VehicleType = "terrestrial" | "aquatic" | "aerial" | "spatial";

class Vehicle {
    name: String;
    type: VehicleType;
    brand: string;
    model: string;

    constructor(type: VehicleType, brand: string, model: string) {
        this.name = "Vehicle"
        this.type = type;
        this.brand = brand;
        this.model = model;
    };
    toString(): string {
        return `${Vehicle.name}: ${this.brand} ${this.model} (${this.type})`;
    }
}
export default Vehicle;