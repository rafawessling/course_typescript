export class Employee {
    name: string;
    protected salary: number;

    constructor(
        name: string,
        salary: number,
    ) {
        this.name = name;
        this.salary = salary;
    };
}