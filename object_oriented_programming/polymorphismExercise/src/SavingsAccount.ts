import { Account, AccountType } from "./Account";

export class SavingsAccount extends Account {
    private yieldRate: number;

    constructor(account: AccountType) {
        super(account);
        this.yieldRate = 0.05;
    }

    withdraw(value: number, password: string): string {
        if (this.password === password) {
            if (value <= this.balance) {
                this.balance -= value;
                return `Balance: R$ ${(this.balance / 100).toFixed(2)}`;
            } else {
                return 'Insufficient balance';
            }
        } else {
            return 'Incorrect password';
        }
    }

    deposit(value: number): string {
        this.balance += value + (value * this.yieldRate);
        return `Balance: R$ ${(this.balance / 100).toFixed(2)}`;
    }
}