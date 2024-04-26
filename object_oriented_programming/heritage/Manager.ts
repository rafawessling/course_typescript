import { Employee } from './Employee';

export class Manager extends Employee {
    private password: string;

    constructor(name: string, salary: number, password: string) {
        super(name, salary);
        this.password = password;
    };

    validatePassword(password: string): boolean {
        return this.password === password;
    }
}