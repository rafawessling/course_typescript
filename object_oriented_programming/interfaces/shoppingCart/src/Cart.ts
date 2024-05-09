import { IProduct } from "./IProduct";

export class Cart {
    private products: IProduct[];

    constructor() {
        this.products = [];
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    };

    removeProduct(idProduct: number): string {
        const productFound = this.products.find(item => item.id === idProduct);
        
        if (productFound) {
            this.products = this.products.filter(item => item.id !== idProduct);
            return 'Product removed';
        }
        return 'Product not found.';
    };
    updateProductQuantity(idProduct: number, quantity: number): string {
        const productFound = this.products.find(item => item.id === idProduct);

        if (productFound) {
            productFound.quantity = quantity;
            return `Product quantity updated to ${quantity}`;
        }
        return 'Product not found.';
    };

    printCart(): IProduct[] {
        return this.products;
    };
}