import { Cart } from "./Cart";
import { SaleCredit } from "./SaleCredit";

const joanaCart = new Cart();

joanaCart.addProduct({
    id: 1,
    description: "Banana",
    category: 'Fruit',
    price: 300,
    quantity: 10
});

joanaCart.addProduct({
    id: 2,
    description: "Apple",
    category: 'Fruit',
    price: 5000,
    quantity: 6
});

joanaCart.updateProductQuantity(1, 15);
joanaCart.removeProduct(2);

console.log(joanaCart.printCart());

const saleJoana = new SaleCredit(joanaCart);
saleJoana.applyDiscount();

console.log(saleJoana.checkout());