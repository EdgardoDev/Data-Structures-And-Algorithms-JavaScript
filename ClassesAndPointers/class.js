class Car {
    constructor(color) {
        this.color = color;
    }

    // Getters and Setters.
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

let carOne = new Car('red');
let carTwo = new Car('green');