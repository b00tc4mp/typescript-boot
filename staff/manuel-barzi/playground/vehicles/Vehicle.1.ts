class Vehicle {
    type: 'land' | 'aerial' | 'water' | 'spatial'
    brand: string
    model: string

    constructor(type: 'land' | 'aerial' | 'water' | 'spatial', brand: string, model: string) {
        this.type = type
        this.brand = brand
        this.model = model
    }
}

export default Vehicle