export type AnimalType = {
    name: string;
    weight: number;
    height: number;
    length: number;
}

export class Animal {
    name: string;
    weight: number;
    height: number;
    length: number;

    constructor(animal: AnimalType) {
        this.name = animal.name;
        this.weight = animal.weight;
        this.height = animal.height;
        this.length = animal.length;
    }

    eat() {
        console.log('Animal is eating');
    }
}

class Dog extends Animal {
    constructor(animal: AnimalType) {
        super(animal);
    }

    bark() {
        console.log('Dog is barking');
    }

    walk() {
        console.log('Animal is walking');
    }
}

class Cat extends Animal {
    constructor(animal: AnimalType) {
        super(animal);
    }

    meow() {
        console.log('Cat is meowing');
    }

    walk() {
        console.log('Animal is walking');
    }
}

class Whale extends Animal {
    constructor(animal: AnimalType) {
        super(animal);
    }

    swim() {
        console.log('Whale is swimming');
    }
}

const dog = new Dog({ name: 'Coco', weight: 10, height: 30, length: 45 });
const cat = new Cat({ name: 'Harvey', weight: 6, height: 15, length: 35 });
const whale = new Whale({ name: 'Allie', weight: 1000, height: 100, length: 1000 });

dog.eat();
dog.bark();
cat.walk();
cat.meow();
whale.swim();