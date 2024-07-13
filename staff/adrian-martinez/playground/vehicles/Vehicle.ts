type VehicleType = "land" | "aerial" | "water" | "spatial";

class Vehicle {
    
    type: VehicleType;
    brand: string;
    model: string;

    constructor(type: VehicleType, brand: string, model: string){
        this.type = type;
        this.brand = brand;
        this.model = model;
    }

    toString(): string{

        return `Vehicle: ${this.brand} ${this.model} (${this.type})`;
    }
}

export default Vehicle;