class Invoice {
    client: string;
    isOpen = true;
    totalAmount: number;
    transactions: {
        description: string,
        amount: number,
        quantity: number
    }[]

    constructor(client: string) {
        this.client = client;
        this.totalAmount = 0;
        this.transactions = [];
    }

    registerProduct(description: string, amount: number, quantity: number) {
        this.transactions.push({ description, amount, quantity });
    }

    closeInvoice() {
        this.isOpen = false;
        this.totalAmount = this.transactions.reduce((acc, transaction) => {
            return acc + transaction.amount * transaction.quantity;
        }, 0);

        return `Client: ${this.client}\n\n${this.transactions.map(transaction => 
            `${transaction.quantity} - ${transaction.description} (R$ ${(transaction.amount / 100).toFixed(2)}) = R$ ${(transaction.amount * transaction.quantity / 100).toFixed(2)}`
            ).join('\n')}\n\nTotal: R$ ${(this.totalAmount / 100).toFixed(2)}`;
    }
}

const invoiceJoana = new Invoice('Joana');

invoiceJoana.registerProduct('Black Shirt', 5990, 2);
invoiceJoana.registerProduct('Blue Shirt', 7900, 1);

console.log(invoiceJoana.closeInvoice());