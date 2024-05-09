import { Account, AccountType } from "./Account";

export class CurrentAccount extends Account {
    private limit: number;

    constructor(account: AccountType) {
        super(account);
        this.limit = 100000;
    }

    withdraw(value: number, password: string): string {
        if (this.password === password) {
            if (value <= this.balance + this.limit) {
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
        this.balance += value;
        return `Balance: R$ ${(this.balance / 100).toFixed(2)}`;
    }
}