import { Developer } from './Developer';
import { Manager } from './Manager';
import { Seller } from './Seller';

const joana = new Developer('Joana', 800000, ['React', 'TypeScript', 'JavaScript']);
const ana = new Manager('Ana', 1000000, '123456');
const maria = new Seller('Maria', 500000, 120000);

console.log(joana);
console.log(ana.validatePassword('123456'));
console.log(maria.calculateSalary());