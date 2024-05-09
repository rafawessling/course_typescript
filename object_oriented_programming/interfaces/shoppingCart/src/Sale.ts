import { Cart } from "./Cart";

export abstract class Sale {
    cart: Cart;
    total: number;

    constructor(cart: Cart) {
        this.cart = cart;
        this.total = this.calculateTotal();
    }

    abstract checkout(): string;

    private calculateTotal(): number {
        let total = 0;

        this.cart.printCart().forEach(product => {
            total += product.price * product.quantity;
        });

        return total;
    }
}