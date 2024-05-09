interface ICar {
    year: number;
    accelerate(): void;
}

interface ITurbo {
    turnOnTurbo(): void;
}

abstract class Car{
    protected velocity: number;

    abstract break(): void;
}

class Fusca extends Car implements ICar, ITurbo{
    year: number;

    constructor(year: number) {
        super();
        this.year = year;
        this.velocity = 0;
    }

    accelerate() {
        this.velocity += 1;
    }

    turnOnTurbo() {
        this.velocity += 50;
    }

    break() {
        this.velocity = 0;
    }
}