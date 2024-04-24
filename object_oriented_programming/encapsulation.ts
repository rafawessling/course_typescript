class Person {
    private name: string;
    private lastName: string;
    private age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    };

    public get getName(): string{
        return this.name;
    }

    public set setName(name: string) {
        this.name = name;
    }

    private fullName(): string {
        return `${this.name} ${this.lastName}`;
    }

    public get getFullName() {
        return this.fullName();
    }
}

const person = new Person('Ana', 'Silva', 25);

console.log(person.getName);

person.setName = 'Joana';

console.log(person.getFullName);