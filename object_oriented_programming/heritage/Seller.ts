import { Employee } from './Employee';

export class Seller extends Employee{
    private salesCommission: number;

    constructor(name: string, salary: number, salesCommission: number){
        super(name, salary);
        this.salesCommission = salesCommission;
    };

    calculateSalary(): number {
        return this.salary + this.salesCommission;
    }
}