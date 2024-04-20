// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// };

class Person {
    constructor(
        public name: string,
        public age: number
    ){ }
};

const joana = new Person('Joana', 30);
const ana = new Person('Ana', 25);

console.log(joana, ana);