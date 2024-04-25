class Person {
    name: string;
    age: number;
    fatherName: string;
    motherName: string;

    constructor (name: string, age: number, fatherName: string, motherName: string) {
        this.name = name;
        this.age = age;
        this.fatherName = fatherName;
        this.motherName = motherName;
    };

    isSiblings(person: Person): boolean {
        return this.fatherName === person.fatherName && this.motherName === person.motherName;
    };

    isOlderThan(person: Person): boolean {
        return this.age > person.age;
    };
};

const person1 = new Person('Joana', 25, 'John', 'Jane');
const person2 = new Person('Jack', 30, 'John', 'Jane');

console.log(`${person1.name} and ${person2.name} are siblings: `, person1.isSiblings(person2));
console.log(`${person1.name} is older than ${person2.name}: `, person1.isOlderThan(person2));