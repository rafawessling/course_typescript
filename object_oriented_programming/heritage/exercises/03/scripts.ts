type CharacterType = {
    name: string;
    velocity: number;
}

class Character {
    name: string;
    velocity = 0;

    constructor(character: CharacterType) {
        this.name = character.name;
        this.velocity = character.velocity;
    }

    walk() {
        this.velocity += 1;
    }

    stop() {
        this.velocity = 0;
    }
}

class Mage extends Character {
    magic = 5;

    constructor(character: CharacterType, magic: number) {
        super(character);
        this.magic = magic;
    }

    spellMagic() {
        if (this.magic > 0) {
            this.magic -= 1;
            console.log('Magic cast!');
        } else {
            console.log('No more magic!');
        }
    }

    createMagic() {
        this.magic += 1;
    }
}

class Arquer extends Character {
    arrows = 5;

    constructor(character: CharacterType, arrows: number) {
        super(character);
        this.arrows = arrows;
    }

    shootArrow() {
        if (this.arrows > 0) {
            this.arrows -= 1;
            console.log('Arrow shot!');
        } else {
            console.log('No more arrows!');
        }
    }

    createArrows() {
        this.arrows += 1;
    }
}

const mage = new Mage({ name: 'Mage', velocity: 0 }, 10);
const arquer = new Arquer({ name: 'Arquer', velocity: 0 }, 10);

mage.walk();
mage.spellMagic();
arquer.shootArrow();
arquer.createArrows();

console.log(mage);
console.log(arquer);
