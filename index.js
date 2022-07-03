class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        const sum = this.array.reduce((prev, curr) => prev + curr)
        return sum
    }
}