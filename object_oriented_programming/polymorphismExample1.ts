abstract class Car {
    year: number;
    velocity: number;

    constructor(year: number) {
        this.year = year;
        this.velocity = 0;
    };

    accelerate(): void {
        this.velocity += 1;
    };

    abstract turnOnTurbo(): void;
};

class Corolla extends Car {
    constructor(year: number) {
        super(year);
    };

    turnOnTurbo(): void {
        this.velocity += 30;
    };
};

class Civic extends Car {
    constructor(year: number) {
        super(year);
    };

    turnOnTurbo(): void {
        this.velocity += 50;
    };
};

class TestCar {
    car: Car;

    constructor(car: Car) {
        this.car = car;
    };

    testTurbo(): void {
        this.car.turnOnTurbo();
    }
}

const corolla = new Corolla(2020);
const civic = new Civic(2023);

const testCorolla = new TestCar(corolla);

corolla.accelerate();
corolla.accelerate();
corolla.turnOnTurbo();

testCorolla.testTurbo();
console.log(corolla.velocity);
