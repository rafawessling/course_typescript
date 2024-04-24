class Calculator {
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    };

    public sum(): number {
        return this.num1 + this.num2;
    };

    public subtract(): number {
        return this.num1 - this.num2;
    };

    public multiply(): number {
        return this.num1 * this.num2;
    };

    public divide(): number {
        return this.num1 / this.num2;
    }
}

const calculator = new Calculator(10, 2);

console.log('Addition: ', calculator.sum());
console.log('Subtraction: ', calculator.subtract());
console.log('Multiplication: ', calculator.multiply());
console.log('Division: ', calculator.divide());