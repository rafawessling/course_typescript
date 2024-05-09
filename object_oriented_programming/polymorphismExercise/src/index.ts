import { Client } from "./Client";
import { CurrentAccount } from "./CurrentAccount";
import { SavingsAccount } from "./SavingsAccount";

const joana = new Client({
    name: 'Joana',
    email: 'joana@email.com',
    cpf: '123.456.789-00'
})

const jose = new Client({
    name: 'José',
    email: 'jose@email.com',
    cpf: '987.654.321-00'
})

const savingsAccountJoana = new SavingsAccount({
    balance: 500000,
    number: '0012-3',
    agency: '432-1',
    password: '12345',
    client: joana,
})

const currentAccountJose = new CurrentAccount({
    balance: 1000000,
    number: '0012-4',
    agency: '321-0',
    password: '12345',
    client: jose,
})

savingsAccountJoana.deposit(100000)
currentAccountJose.withdraw(210000, '12345')

console.log(savingsAccountJoana, currentAccountJose)