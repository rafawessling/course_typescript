class Lamp {
    power: number;
    isOn = false;

    constructor(power: number) {
        this.power = power;
    };

    switchOn(){
        this.isOn = true;
    };

    switchOff(){
        this.isOn = false;
    };

    get getPower(){
        return this.power;
    };
};

const lamp = new Lamp(60);

lamp.switchOn();

console.log(lamp);

lamp.switchOff();

console.log(lamp.getPower);