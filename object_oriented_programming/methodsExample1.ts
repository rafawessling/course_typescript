class Car {
    color: string;
    brand: string;
    model: string;
    year: number;
    cv: number;
    turnedOn = false;
    acceleration = 0;

    constructor(color: string, brand: string, model: string, year: number, cv: number) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.cv = cv;
    }

    turnOn() {
        if (!this.turnedOn) {
            this.turnedOn = true;
        }
    }

    turnOff() {
        if (this.turnedOn) {
            this.turnedOn = false;
        }
    }

    accelerate(rpm: number) {
        this.acceleration += rpm;
    }

    brake() {
        this.acceleration = 0;
    }

    carStatus() {
        return `The car ${this.brand} ${this.model} is ${this.turnedOn ? 'turned on' : 'turned off'}. ${this.turnedOn ? 'It is running at ' + this.acceleration + ' rpm.' : ''}`
    }
}

const fusca = new Car('blue', 'Volkswagen', 'Fusca', 1970, 50);

fusca.turnOn();
fusca.accelerate(1000);
fusca.accelerate(1000);
fusca.accelerate(1000);
console.log(fusca.carStatus());
fusca.brake();
fusca.turnOff();
console.log(fusca.carStatus());