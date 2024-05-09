import { Client } from "./Client";

export type AccountType = {
    balance: number,
    agency: string,
    number: string,
    password: string,
    client: Client
}

export abstract class Account {
    protected balance: number;
    number: string;
    agency: string;
    protected password: string;
    client: Client;

    constructor(account: AccountType) {
        this.balance = account.balance;
        this.number = account.number;
        this.agency = account.agency;
        this.password = account.password;
        this.client = account.client;
    }

    checkBalance(password: string): string {
        if (this.password === password) {
            return `Balance: R$ ${(this.balance / 100).toFixed(2)}`;
        }
        return 'Incorrect password';
    }

    abstract deposit(value: number): string

    abstract withdraw(value: number, password: string): string
}