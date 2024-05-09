import { Cart } from "./Cart";
import { ISale } from "./ISale";
import { Sale } from "./Sale";

export class SaleCredit extends Sale implements ISale{
    readonly discount: number;

    constructor(cart: Cart) {
        super(cart);
        this.discount = 0.05;
    }

    applyDiscount(): void {
        if (this.total > 10000) {
            this.total -= this.total * this.discount;
        }
    }

    checkout(): string {
        return `Order finished. Total: R$${(this.total / 100).toFixed(2)}`;
    }
}