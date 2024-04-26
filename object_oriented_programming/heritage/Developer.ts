import { Employee } from './Employee';

export class Developer extends Employee {
    languages: string[];

    constructor(name: string, salary: number, languages: string[]){
        super(name, salary);
        this.languages = languages;
    };
}