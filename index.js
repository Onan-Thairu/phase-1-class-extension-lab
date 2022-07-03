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

class Triangle extends Polygon {
    get isValid() {
        const arr = this.array
        if (arr[0] + arr[1] <= arr[2] || arr[0] + arr[2] <= arr[1] || arr[1] + arr[2] <= arr[0]) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get area() {
        return this.array[0] * this.array[1]
    }

    get isValid() {
        const arr = this.array
        if (arr[0] === arr[1] === arr[2] === arr[3]) {
            return true
        } else {
            return false
        }
    }
}